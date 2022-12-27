import React, { useState } from 'react'

type Info = {
    name: string,
    email: string,
    phone: string,
}

export default function PersonalInfo() {
    const [formData, setFormData] = useState<Info>({
        name: '',
        email: '',
        phone: ''
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (formData.name && formData.email && formData.phone) {
            console.log('Correct')
            
        } else {
            console.log('Error')
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }

    return (
        <main>
            <form onSubmit={handleSubmit}>
                <label htmlFor='name'><span className="req">*</span>Name: </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    required
                    value={formData.name}
                    onChange={handleChange}
                />
                <label htmlFor='name'><span className="req">*</span>Email: </label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor='name'><span className="req">*</span>Phone: </label>
                <input
                    type='text'
                    name='phone'
                    id='phone'
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input type='submit' value='Submit' />
            </form>
            <div>
                <p>Name: {formData.name}</p>
                <p>Email: {formData.email}</p>
                <p>Phone: {formData.phone}</p>
            </div>
        </main>
    )
}
