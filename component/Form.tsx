import React from "react";
import { useForm } from "react-hook-form";

function Form() {

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm({
        defaultValues: {
            name: "",
            mobileNumber: "",
            email: "",
            address: ""
        }
    });

    console.log(getValues("name")); // you can watch individual input by pass the name of the input

    console.log(errors?.name?.type); // we can also check type of the errors

    return (
        <form
            onSubmit={handleSubmit((data) => {
                alert(JSON.stringify(data));
            })}
        >
            <label>Name</label>
            <input {...register("name", { required: true })} />
            {errors.name && <p>This field is required</p>}

            <label>Mobile Number</label>
            <input {...register("mobileNumber", { required: true, maxLength: 10 })} />
            {errors.mobileNumber && <p>This field is required</p>}
            {errors?.mobileNumber?.type === "maxLength" && <p>Please enter exact 10 digit number</p> }

            <label>Email</label>
            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && <p>This field is required</p>}

            <label>Address</label>
            <input {...register("address")} />
            {errors.address && <p>This field is required</p>}

            <input type="submit" />
        </form>
    );
}

export default Form


// pattern: /^\S+@\S+$/i

// {errors?.mobileNumber?.type === "maxLength" && <p>Please enter exact 10 digit number</p> }