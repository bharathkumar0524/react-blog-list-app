import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsData} = props

  return (
    <ul className="blogs-list-container">
      {blogsData.map(eachBlog => (
        <BlogItem blogItem={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}
export default BlogList
