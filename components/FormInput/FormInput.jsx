import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './FormInput.module.scss';

const FormInput = ({ type="text", label, id, onChange, error, message, ...props }) => {
    const handleChange = (e) => {
        onChange(e);
    }
    return (
        <div className={styles.formGroup}>
            <label className={styles.formLabel}>{label}</label>
            <input
                type={type}
                id={id}
                className={`${styles.formInput} ${error ? styles.borderRed : ''}`}
                onChange={(e) => handleChange(e)}
                autoComplete="off"
                {...props}
            />
            {
                error && <div className={`${styles.formMessage} mt-8px`}>{message}</div>
            }
        </div>
    )
}

export default FormInput
