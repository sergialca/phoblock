import React, { useContext, useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import CategorySelect from "../categorySelect/categorySelect";
import SubmitButton from "../submitButton/submitButton";
import { addImage } from "../../api/api";
import { UserContext } from "../../context/user";
import IpfsApi from "ipfs-http-client";
import "./uploadForm.scss";

const UploadForm = ({ display, onClose }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [fields, setFields] = useState({ select: [""] });
    const [loading, setLoading] = useState(false);
    const [isFile, setIsFile] = useState("");
    const [ipfsMsg, setIpfsMsg] = useState({
        msg: "",
        color: "#4ED900",
    });
    const { user } = useContext(UserContext);

    const ipfs = IpfsApi({
        host: "ipfs.infura.io",
        port: "5001",
        protocol: "https",
    });

    const onSelect = (ob) => {
        if (ob) {
            const categories = ob.map((e) => {
                return e.value;
            });
            setFields((field) => ({
                ...field,
                select: categories,
            }));
            setIpfsMsg(() => ({
                msg: "",
                color: "#ff0000",
            }));
        }
    };

    const upload = async () => {
        if (selectedFile) {
            setLoading(() => true);
            setIsFile(() => "");
            const ipfsres = await ipfs.add(selectedFile);
            if (ipfsres) {
                setIpfsMsg(() => ({
                    msg: "Image uploaded to IPFS successfully",
                    color: "#4ED900",
                }));
                addImage(fields.select, user.author, ipfsres.path, user.wallet);
                setLoading(() => false);
            } else {
                setIpfsMsg(() => ({
                    msg: "An error occured when uploading to ipfs",
                    color: "#ff0000",
                }));
                setLoading(() => false);
            }
        } else setIsFile(() => "Upload a file");
    };

    return (
        <div>
            <div className={display ? "modal" : "no-modal"}>
                <div className="modal-back"></div>
                <div className="container">
                    <div className="info">
                        <div className="form">
                            <div className="close-wrapper">
                                <button
                                    className="close-btn"
                                    onClick={() => {
                                        setIsFile(() => "");
                                        onClose();
                                    }}
                                >
                                    <ImCross className="x" />
                                </button>
                            </div>
                            <p className="form-title">Upload images</p>
                            <input
                                type="file"
                                onChange={(e) => setSelectedFile(e.target.files[0])}
                            />
                            <p className="file-error">{isFile}</p>
                            <CategorySelect
                                label="Choose categories for your image"
                                name="select"
                                onChange={onSelect}
                            />
                            <div className="btn-wrap">
                                <SubmitButton
                                    txt="Upload"
                                    width="200px"
                                    bcolor="#42B8A8"
                                    color="#fff"
                                    loading={loading}
                                    call={upload}
                                />
                            </div>
                            <p style={{ color: ipfsMsg.color, textAlign: "center" }}>
                                {ipfsMsg.msg}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadForm;
