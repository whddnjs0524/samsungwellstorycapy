import { useEffect, useState, useRef } from "react"
import '../../assets/sass/Section2.scss'

const Section2 = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const righttopRef = useRef<HTMLDivElement>(null)
  const rightbottomRef = useRef<HTMLDivElement>(null)
  const [count1, setcount1] = useState(0);
  const [count2, setcount2] = useState(0);
  const [anitrue, setanitrue] = useState(false);
  useEffect(() => {

    //observer
    //내가 뷰포트에 들어왔는지 안들어왔는지 감지하는친구다.
    const myobserver = new IntersectionObserver(
      ([entry]) => {
        //실행이 되었는지 안되었는지 감지하는 친구가 있어야함

        //감지를해라
        if (entry.isIntersecting && !anitrue) {
          leftRef.current?.classList.add('active')

          setTimeout(() => {
            righttopRef.current?.classList.add('active')
          }, 500)

          setTimeout(() => {
            rightbottomRef.current?.classList.add('active')
            updatecount()
          }, 2000)
          
          setanitrue(true)
        }
      },
      { threshold: 0.5 }
    )

    // 누가? 
    if (sectionRef.current) myobserver.observe(sectionRef.current)
      return() => myobserver.disconnect()
  }, [anitrue])

  const updatecount = () => {
    let num1 = 0;
    let num2 = 1000;

    const time1 = setInterval(() => {
      if (num1 + 3 >= 100) {
        num1 = 100;
        setcount1(num1);
        clearInterval(time1);
      } else {
        num1 += 3;
        setcount1(num1);
      }
    }, 50);

    const time2 = setInterval(() => {
      if (num2 + 100 >= 10000) {
        num2 = 10000;
        setcount2(num2);
        clearInterval(time2);
      } else {
        num2 += 100;
        setcount2(num2);
      }
    }, 20);
  }

  // 올려놓은거중에 다음 이미지를 막 눌럿을때 찾아서 적용시켜보기

  return (
    <section className="section2" ref={sectionRef}>
      <div className="left" ref={leftRef}>
        <h1>our Story</h1>
      </div>
      <div className="right">
        <div className="top" ref={righttopRef}>
          <h3>우리의 삶이 건강해지고 당신의 비즈니스가 더 성장하는 스토리</h3>
          <h4>고객의 삶과 비즈니스가 건강한 성장을 이룰 수 있도록 맞춤 서비스, 앞선 전문성, 새로운 연결로 차별화된 식음 솔루션을 제안하고 산업의 미래를 리딩하며 고객과 함께 성장하는 기업, 우리는 삼성웰스토리입니다.</h4>
        </div>
        <div className="bottom" ref={rightbottomRef}>
          <span className="counttext"><span>{count1}</span>만식</span>
          <span className="counttext"><span>{count2.toLocaleString()}</span>개</span>
        </div>
      </div>
    </section>
  )
}

export default Section2