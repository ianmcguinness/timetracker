import img from '/assets/images/image-jeremy.png'
import '../styles/Name.css'

const Name = ({ activeTimeframe, setActiveTimeframe }) => {
  return (
    <article className='Name'>
      <div className='name-card'>
        <div className='img-box'>
          <img src={img} alt='user image' />
        </div>
        <h3>Report for</h3>
        <h1>Jeremy Robson</h1>
      </div>
      <div className='timeframes'>
        {['Daily', 'Weekly', 'Monthly'].map((el, i) => (
          <h3
            key={i}
            className={activeTimeframe === el ? 'active' : undefined}
            onClick={() => setActiveTimeframe(el)}>
            {el}
          </h3>
        ))}
      </div>
    </article>
  )
}

export default Name
