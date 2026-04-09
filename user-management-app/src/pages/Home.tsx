import UserForm from '../components/UserForm'
import DashboardTable from '../components/DashboardTable'
import { useQueryClient } from '@tanstack/react-query'

const Home = () => {
    const queryClient = useQueryClient()

  const handleRefresh = () => {
    queryClient.invalidateQueries({
        queryKey: ['users']
    })
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">User Management Dashboard</h1>
        <UserForm onSuccess={handleRefresh} />
        <DashboardTable />
      </div>
    </div>
  )
}

export default Home