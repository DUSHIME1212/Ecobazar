import LatestNewsHolder from '../components/LatestNewHolder'
const LatestNewsHome = () => {
  return (
    <div className="w-full flex  flex-col lg:flex-row gap-8">
        <LatestNewsHolder/>
        <LatestNewsHolder/>
        <LatestNewsHolder/>
    </div>
  )
}

export default LatestNewsHome