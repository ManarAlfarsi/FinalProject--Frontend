export interface CustomerInterFace {
	id?: number;
	name: string;
	email: string;
	password?: string;
}

export interface CustomerServiceInterface {
	create(customer: CustomerInterFace): CustomerInterFace;
	update(customer: CustomerInterFace): CustomerInterFace;
	getAll(): CustomerInterFace[];
	getOne(id: number): CustomerInterFace;
}
