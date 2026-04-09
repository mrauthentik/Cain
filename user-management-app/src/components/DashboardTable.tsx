import { useUsers } from '../hooks/useUsers'

const DashboardTable = () => {
    const {data, isLoading} = useUsers()

    if(isLoading) {
        return (
            <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                    Loading users...
                  </div>
        )
    }

    if(!data?.length){
        return (
            <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                    No entries yet.
                  </div>
        )
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-md mt-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b">
                    <th className="py-3">Name</th>
                    <th className="py-3">Email</th>
                    <th className="py-3">Role</th>
                  </tr>
                </thead>
        
                <tbody>
                  {data.map((user: any) => (
                    <tr key={user.id} className="border-b">
                      <td className="py-3">{user.name}</td>
                      <td className="py-3">{user.email}</td>
                      <td className="py-3">{user.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
    )
}

export default DashboardTable