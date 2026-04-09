import UserForm from '../components/UserForm'

const Home = () => {
  const handleRefresh = () => {
    console.log('refresh dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">User Submission</h1>
        <UserForm onSuccess={handleRefresh} />
      </div>
    </div>
  )
}

export default Home