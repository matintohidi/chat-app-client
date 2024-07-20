import React , { useState } from 'react';
// packages dependencies
import { ErrorMessage , useFormikContext } from "formik";
import * as yup from "yup";
// utils
import { SUPPORTED_FORMATS } from "../../../../../utils/supported_formats";
// exceptions
import ValidationError from "../../../../../exceptions/validationError";
import {v1 as uuid} from "uuid";

// props interface
interface PropsImage {
    name?: string,
    profile?: string,
    city?: string
}

const ChangeProfile : React.FC<PropsImage> = ({ profile , name , city }) => {
    const [ errors , setErrors ]: any[] = useState([]);
    const { setFieldValue } = useFormikContext();

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const profileValidation = yup.object().shape({
            profile: yup.mixed()
                .test("format" , "The image format should be .jpeg .png .jpg." , (value) => SUPPORTED_FORMATS.includes(value.type))
                .test("size" , "The desired image size should be less than 5MB." , (value) => value.size <= 5000000)
        })

        const target = e.target as HTMLInputElement & {
            files: FileList
        }

        const profile = target.files[0];

        try {
            profileValidation.validateSync({ profile });
            setErrors([]);
            setFieldValue("profile" , profile);
        } catch (err:any) {
            setErrors((prev: any[]) => {
                if(!prev.includes(err.message)) {
                    return [err.message]
                } else {
                    return  [...prev]
                }
            })
        }
    }

    const deleteProfile = () => {
        setFieldValue("profile" , null);
    }

    return (
        <section>
            <h3 className="text-sm">Profile Picture</h3>

            <div className="flex flex-col sm:flex-row gap-3 w-full mt-3">
                <div className="flex items-center w-fit gap-3">
                    {
                        profile
                            ? <img src={`http://localhost:5000/images/${profile}`}
                                   alt={`${name} Profile`}
                                   className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary p-0.5"
                            />
                            : <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-primary p-0.5">
                                <span>{name !== undefined && name[0]}</span>
                            </div>
                    }

                    <div className="flex flex-col">
                        <h2 className="text-sm">{name}</h2>
                        <h3 className="font-InterRegular text-gray-600 text-xs">Front-end Developer</h3>
                        {city && <h3 className="font-InterRegular text-gray-600 text-xs">{city}</h3>}
                    </div>
                </div>

                <div className="flex items-end gap-2 lg:gap-4">
                    <label className="py-2 px-4 bg-primary text-white rounded-lg font-InterRegular text-xs lg:px-7 lg:py-2.5">
                        Change
                        <input name="profile" id="profile" type="file" className="hidden" onChange={handleChange} />
                    </label>
                    <button type="button" className="border border-primary px-4 py-2 rounded-lg text-primary font-InterRegular text-xs lg:px-7 lg:py-2.5" onClick={deleteProfile}>
                        Delete
                    </button>
                </div>
                {
                    errors.map((err: string) => <span key={uuid()} className="text-red-600 text-sm font-InterRegular w-40 text-start">{err}</span>)
                }
            </div>
        </section>
    )
}

export default ChangeProfile;