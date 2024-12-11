import {useSelector} from 'react-redux'
function DisplayCounter(){

  const {counterVal} = useSelector(store=> store.counter)

    return  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">
      Counter Current value : {counterVal}
    </p>
    
  </div>
}
export default DisplayCounter;