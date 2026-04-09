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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Management Dashboard</h1>
        <UserForm onSuccess={handleRefresh} />
        <DashboardTable />
      </div>
    </div>
  )
}

export default Home