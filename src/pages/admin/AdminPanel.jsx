
import Body from './Body'
import HeaderAdmin from './HeaderAdmin'

function AdminPanel() {
  return (
    <div className="container mx-auto" >

      <div>
        <HeaderAdmin />
      </div>

      <div>
        <Body />
      </div>


    </div>
  )
}

export default AdminPanel