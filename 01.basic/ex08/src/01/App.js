import React from 'react';

export default function(){
    return (
        <div>
            <h2>App01</h2>
            <p>JSX Tutorials - 특징 1: HTML과 차이점</p>
            {/* 주석은 이렇게
                1. 속성은 Camel Case
            */}
            <input type='text' maxLength='10' />

            {/*
                2. Element는 꼭 닫혀야 한다.
                오류) <br>, <hr>, <input>, <img>
            */}
            <br />
            <hr />
            <img src='https://play-lh.googleusercontent.com/KwUBNPbMTk9jDXYS2AeX3illtVRTkrKVh5xR1Mg4WHd0CG2tV4mrh1z3kXi5z_warlk' />

            {/*
                3. 속성 이름은 DOM API 기반이다.
                <div id='box' class=''></div>
                document.getElmentById('box').className = 'box'   =>   DOM API
            */}
            <div id='box' className='box'>
                box입니다.
            </div>
        </div>
    )
}