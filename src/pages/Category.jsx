import React, { useEffect, useState } from 'react'

import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

import DashboardLayout from '../Components/DashboardLayout'
import axios from 'axios'
const Category = () => {
  const [categoryName,setCategoryName] = useState('')
  const [image,setImage] = useState(null)

  const [editText,setEditText] = useState('')
  const [editImage,setEditImage] = useState(null)
  const [visible, setVisible] = useState(false);

  const [showData,setShowData] = useState([])
  const Api_Url = import.meta.env.VITE_API_URL
  const token = localStorage.getItem('token')
  const handleSubmit = async (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('categoryName',categoryName)
        if(image){
           formData.append('image',image)
        }
        try {

          const res = await axios.post(`${Api_Url}/api/category/create-category`,formData,
             {
                    headers : {
                        Authorization : `${token}`
                    }
                }
          )
          alert('create category')
          Refresh()

        } catch (error) {
          console.log(error)
        }
       }
       const Refresh = async ()=>{
            let getData = await axios.get(`${Api_Url}/api/category/get-category`,{
              headers : {
                Authorization : `${token}`
              }
            })
            setShowData(getData.data.CategoryData)
            console.log(getData)
       }
       const handleDelete = async (Id)=>{
          let deleteCategory = await axios.delete(`${Api_Url}/api/category/delete-category/${Id}`,{
            headers:{
              Authorization : `${token}`
            }
          })
          alert('category deleted')
           Refresh()
       }
       const handleEdit = ()=>{

       }
       useEffect(()=>{
          Refresh()
       },[])
  return (
    <>
       <DashboardLayout>
        <h2>Category Name :</h2>
        <form onSubmit={handleSubmit} >
          <label htmlFor="">Category Name : </label>
           <input 
         type="text"
         name="categoryName"
         placeholder='Enter Category Name '
         onChange={(e)=>{setCategoryName(e.target.value)}}
         value={categoryName}
         />
         <br /><br /><br />
         <label>Image</label>
         <input 
         type="file"
         name = 'categoryImage'
         onChange={(e)=>{setImage(e.target.files[0])}}

          />
          <button>
            Add Category
          </button>
        </form>
            <div className=''>
                <h1>All Cateogry</h1>
                <button
                 onClick={Refresh}
                >Refresh</button>
            </div>
            <div>
                 <table border='1' cellPadding="2" cellSpacing='0'>
                    <thead>
                        <tr>
                          <th>Sr.No</th>
                          <th>Category Name</th>
                          <th>Image</th>
                          <th colSpan='2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                          showData.map((item,key)=>(
                            <tr key={key}>
                                  <td>{key+1}</td>
                                  <td>{item.categoryName}</td>
                                  <td><img style={{height : "200px"}} src={item.image} alt="" /></td>
                                  <td> <button  onClick={() => setVisible(true)}>Edit</button></td>
                                  <td> <button  onClick={()=>{handleDelete(item._id)}}>Delete</button> </td>
                            </tr>
                          ))
                        }
                    </tbody>
                 </table>
            </div>
             <Dialog header="Header" visible={visible} modal={false} style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                 <form onSubmit={handleEdit} >
          <label htmlFor="">Category Name : </label>
           <input 
         type="text"
         name="categoryName"
         placeholder='Enter Category Name '
         onChange={(e)=>{setEditText(e.target.value)}}
         value={categoryName}
         />
         <br /><br /><br />
         <label>Image</label>
         <input 
         type="file"
         name = 'categoryImage'
         onChange={(e)=>{setEditImage(e.target.files[0])}}

          />
          <button>
            Add Category
          </button>
        </form>
            </Dialog>
        </DashboardLayout>
    </>
  )
}

export default Category