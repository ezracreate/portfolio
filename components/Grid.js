import PropTypes from 'prop-types'
import Card from './Row'

const Grid = ({ works = [] }) => {
  const isEmpty = works.length === 0
  return isEmpty ? (
    <p className="text-amber-700 bg-amber-100 px-4 rounded-md py-2 max-w-max inline-flex items-center space-x-1">
      <span>Unfortunately, there is nothing to display yet.</span>
    </p>
  ) : (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {works.map(work => (
        <Card key={work.id} {...work} />
      ))}
    </div>
  )
}

Grid.propTypes = {
  works: PropTypes.array
}

export default Grid
