import React, { useState } from 'react'

export default function Q11Size(props: {
    oldAnswers: Answers
    answersUpdate: (answersParam: Answers) => void
    currentStep: number
    max: number
    schedule: Schedule[]
    onPrev: () => void
    onNext: () => void
}) {
    const [size1, setSize1] = useState<string>('')
    const [size2, setSize2] = useState<string>('')
    const [size3, setSize3] = useState<string>('')
    const [totalSize, setTotalSize] = useState<string>(props.oldAnswers.size)

    function handleChange1(newSize: string) {
        setSize1(newSize)
        const tempTotalSize = newSize + '-' + size2 + '-' + size3
        setTotalSize(tempTotalSize)

        let answersParam: Answers = props.oldAnswers
        answersParam.size = tempTotalSize
        props.answersUpdate(answersParam)

        localStorage.setItem('floev[currentStep]', '11')
        localStorage.setItem('floev[size]', tempTotalSize)
    }

    function handleChange2(newSize: string) {
        setSize2(newSize)
        const tempTotalSize = size1 + '-' + newSize + '-' + size3
        setTotalSize(tempTotalSize)

        let answersParam: Answers = props.oldAnswers
        answersParam.size = tempTotalSize
        props.answersUpdate(answersParam)

        localStorage.setItem('floev[currentStep]', '11')
        localStorage.setItem('floev[size]', tempTotalSize)
    }

    function handleChange3(newSize: string) {
        setSize3(newSize)
        const tempTotalSize = size1 + '-' + size2 + '-' + newSize
        setTotalSize(tempTotalSize)

        let answersParam: Answers = props.oldAnswers
        answersParam.size = tempTotalSize
        props.answersUpdate(answersParam)

        localStorage.setItem('floev[currentStep]', '11')
        localStorage.setItem('floev[size]', tempTotalSize)
    }

    return (<>
                <div className="q-wrap q11">
                    <div className="q-wrap__question-main">내 안경의 사이즈를 입력해주세요.</div>
                    <div className="q-wrap__question-sub">지워지거나 원래 적혀있지 않은 안경도 있어요. 편하게 넘어가셔도 괜찮습니다.</div>
                    <div className="q-wrap__answer-wrap">
                        <img src="static/img/survey/size-info.jpg" alt=""/>
                        <input className="input-text input-text-size-1" type="text" tabIndex={1} placeholder={'46'} value={size1} maxLength={2} onChange={e => handleChange1(e.target.value)} />
                        <input className="input-text input-text-size-2" type="text" tabIndex={2} placeholder={'24'} value={size2} maxLength={2} onChange={e => handleChange2(e.target.value)} />
                        <input className="input-text input-text-size-3" type="text" tabIndex={3} placeholder={'145'} value={size3} maxLength={3} onChange={e => handleChange3(e.target.value)} />
                    </div>
                    <div className="q-wrap__btn-wrap">
                        <button className="q-wrap__btn q-wrap__btn-prev" type="button" disabled={props.currentStep !== props.max ? false : true} onClick={() => props.onPrev()}>이전</button>
                        {totalSize.length === 0 ? (
                            <button className="q-wrap__btn q-wrap__btn-next" type="button" onClick={() => props.onNext()}><span>다음</span> <img src="static/img/survey/ic-arrows-right.png" alt=""/></button>) :
                            (<button className="q-wrap__btn q-wrap__btn-next" type="button" onClick={() => props.onNext()}><span>다음</span> <img src="static/img/survey/ic-arrows-right.png" alt=""/></button>)
                        }
                    </div>
                </div>
    </>)
}