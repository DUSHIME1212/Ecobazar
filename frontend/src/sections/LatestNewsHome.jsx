import LatestNewsHolder from '../components/LatestNewHolder'
const LatestNewsHome = () => {
  return (
    <div className="w-full flex  flex-col lg:flex-row">
        <LatestNewsHolder/>
        <LatestNewsHolder/>
        <LatestNewsHolder/>
    </div>
  )
}

export default LatestNewsHome