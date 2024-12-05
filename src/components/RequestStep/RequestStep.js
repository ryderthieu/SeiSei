import style from './RequesStep.module.scss'

const RequestStep = ({data, active}) => {
    const StepItem = ({ number, text, isActive, isLast, isDone }) => {
        return (
          <>
            <div className={style.stepItem}>
              <div className={`${style.circle} ${isActive ? style.circleActive : ''} ${isDone ? style.circleDone : ''}`}>
                {isDone ? <span><ion-icon name="checkmark-outline"></ion-icon></span>  : number}
              </div>
              <div className={`${style.stepText} ${isActive||isDone ? style.stepTextActive : ''}`}>
                {text}
              </div>
            </div>
            {!isLast && (
              <div className={style.stepTrail}>
                <div className={style.trailLine} />
              </div>
            )}
          </>
        );
      };
      return (
        <div className={style.container}>
            {data?.map((step, index) => (
              <StepItem
                key={step.number}
                number={index + 1}
                text={step}
                isActive={active === index}
                isLast={index === data.length - 1}
                isDone={index < active}
              />
            ))}
        </div>
      );
}

export default RequestStep;