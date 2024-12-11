import {useSelector} from 'react-redux'
function DisplayCounter(){

  const counter = useSelector(store=> store.counter)

    return  <div className="col-lg-6 mx-auto">
    <p className="lead mb-4">
      Counter Current value : {counter}
    </p>
    
  </div>
}
export default DisplayCounter;