import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema, type UserFormData } from '../schemas/userSchema'
import { createUser } from '../services/userService'
import toast from 'react-hot-toast'
interface UserFormProps {
  onSuccess: () => void
}

const UserForm = ({ onSuccess }: UserFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<UserFormData>({
    resolver: zodResolver(userSchema),
  })

  const onSubmit = async (data: UserFormData) => {
    try {
      await createUser(data)
      toast.success('User submitted successfully!')
      reset()
      onSuccess()
    } catch (error: any) {
      console.error(error)
      toast.error(error.message)
    }
  }
  console.log(errors)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-2xl shadow-md space-y-5"
    >
      <div>
        <input
          {...register('name')}
          placeholder="Name"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
        type='email'
          {...register('email')}
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('role')}
          placeholder="Role"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        {errors.role && (
          <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        onClick={()=>console.log('button is being clicked')}
        className="w-full bg-black text-white py-3 rounded-lg hover:opacity-90 transition"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default UserForm