// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem
  return (
    <li className="blog-item-container">
      <div className="title-publish-date-container">
        <h1 className="blog-title">{title}</h1>
        <p className="publish-date">{publishedDate}</p>
      </div>
      <p className="blog-description">{description}</p>
    </li>
  )
}
export default BlogItem
