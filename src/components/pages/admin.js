
import { useState } from 'react'
import axios from 'axios'
import ImageList from '../imageList'



async function postImage({image, description, site, main}) {
  const formData = new FormData();
  formData.append("image", image)
  formData.append("description", description)
  formData.append("site", site)
  formData.append("main", main)

  const result = await axios.post('/api/images', formData, { headers: {'Content-Type': 'multipart/form-data'}})
  return result.data
}


function Admin() {

  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [site, setSite] = useState()
  const [main, setMain] = useState(false)
  const [images, setImages] = useState([])

  const submit = async event => {
    event.preventDefault()
    const result = await postImage({image: file, description, site, main})
    setImages([result.image, ...images])
  }

  const fileSelected = event => {
    const file = event.target.files[0]
		setFile(file)
	}

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*"></input>
        <input value={description} onChange={e => setDescription(e.target.value)} type="text" prompt="description"></input>
        <input value={site} onChange={e => setSite(e.target.value)} type="number" prompt="site"></input>
        <button type="submit">Submit</button>
      </form>

      { images.map( image => (
        <div key={image}>
          <img src={image}></img>
        </div>
      ))}

      
      <ImageList />

    </div>
  );
}

export default Admin;