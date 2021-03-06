import React, {useRef} from 'react';
import styles from './assets/scss/WriteForm.scss';

export default function WriteForm({notifyMessage}) {
    const refForm = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        try{
            const message = Array.from(e.target, (input) => {
                // simple validation
                if(input.value === ''){
                    throw `validation ${input.placeholder} is empty`;
                }
                return {n: input.name, v:input.value}
            })
            .filter(({n}) => n !== '')
            .reduce((res, {n, v}) => { 
                res[n] = v; 
                return res ;
            }, {});

            refForm.current.reset();
            notifyMessage.add(message);
        } catch(e){
            console.error(e);
        }
    };

    return (
        <form 
            ref={refForm}
            onSubmit={handleSubmit}
            className={styles.WriteForm}>
            <input
                type={'text'}
                name={'name'}
                placeholder={'이름'}
                autoComplete={' off'}/>
            <input
                type={'password'}
                name={'password'}
                placeholder={'비밀번호'}
                autoComplete={'off'} />
            <textarea
                name={'message'}
                placeholder={'메세지(내용)'} />
            <input
                type={'submit'}
                value={'보내기'}
                autoComplete={'off'} />
        </form>
    );
}