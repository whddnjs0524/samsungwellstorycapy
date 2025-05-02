import { useEffect, useState } from "react"
import '../../assets/sass/Section1.scss'


const Section1 = () => {
    const [textactive, settextactive] = useState(false)
    const [showCircle, setshowCircle] = useState(false)
    const [bgidx, setbgidx] = useState(0)

    const bgimgs = ['/img/img1.jpg', '/img/img2.jpg', '/img/img3.jpg'];
    useEffect(() => {
        const timer = setTimeout(() => settextactive(true), 1000);
        return () => clearTimeout(timer)
    }, [])

    const showevent = () => {
        setshowCircle(true);
        //배열일때 인덱스번호바꾸는공식
        setTimeout(() => {
            setbgidx((prevIndex) => (prevIndex + 1) % bgimgs.length)
            // if로 길게적기
            // setbgidx((prevIndex) => {
            //     const aIndex = prevIndex+1;
            //     if(aIndex > bgimgs.length){
            //         return 0
            //     }else{
            //         return aIndex
            //     }
            //  })
        }, 300)
        setTimeout(() => {
            setshowCircle(false);
        }, 1000)
    }

    return (
        <div className="section1">
            {
                bgimgs.map((item, idx) => (
                    <img key={idx} src={item} alt={`img${idx}`}
                        className={`imgbg ${bgidx === idx ? 'bgon' : ''}`} />
                ))
            }
            <div className={`textbox ${textactive ? 'texton' : ''}`}>
                <h1>환영합니다 나의 타입스크립트</h1>
                <button onClick={showevent}>다음 이미지</button>
            </div>
            {
                showCircle && <div className="bigcircle" />
            }
        </div>
    )
}

export default Section1