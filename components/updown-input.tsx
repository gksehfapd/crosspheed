import { useEffect, useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface UpDownInputProps {
	register: UseFormRegisterReturn
	name: string
}

export default function UpDownInput({ register, name }: UpDownInputProps) {
	return (
		<div className="bg-blue-200 w-8 text-center h-26 flex flex-col justify-center items-center">
			<span className="material-symbols-outlined bg-red-200 hover:cursor-pointer">
				arrow_drop_up
			</span>
			<input type="number" className="w-8" defaultValue={0} {...register} id={name} />
			<span className="material-symbols-outlined bg-red-200 hover:cursor-pointer">
				arrow_drop_down
			</span>
		</div>
	)
}
