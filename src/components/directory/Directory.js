import Category from '../category-item/Category'
import './directory.style.scss'
const Directory = ({categories}) =>{
    console.log(categories)
    return(
        <div className="directory-container">
            {
            categories.map((category) =>( 
                    <Category key={category.id}  category = {category} />                       
            ))}
        </div>
  
    )
}

export default Directory 