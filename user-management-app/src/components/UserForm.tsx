import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema, type UserFormData } from '../schemas/userSchema'
import { createUser } from '../services/userService'

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
      reset()
      onSuccess()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <div>
        <input
          {...register('name')}
          placeholder="Name"
          className="w-full border p-3 rounded-md"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('email')}
          placeholder="Email"
          className="w-full border p-3 rounded-md"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('role')}
          placeholder="Role"
          className="w-full border p-3 rounded-md"
        />
        {errors.role && (
          <p className="text-red-500 text-sm mt-1">{errors.role.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white py-3 rounded-md"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
}

export default UserForm