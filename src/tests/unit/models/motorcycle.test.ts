import { expect } from 'chai';
import sinon from 'sinon';
import MotorcycleModel from '../../../models/Motorcycle';
import { Model } from 'mongoose';
import { motorcycleMock, motorcycleMockWithId } from '../../mocks/motorcycleMock';

describe('Motorcycle Model', () => {
	const motorcycleModel = new MotorcycleModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(motorcycleMockWithId);
		sinon.stub(Model, 'find').resolves([motorcycleMockWithId]);
		sinon.stub(Model, 'findOne').resolves(motorcycleMockWithId);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleMockWithId);
		sinon.stub(Model, 'findByIdAndDelete').resolves(motorcycleMockWithId);
	});

  after(() => {
		sinon.restore();
	});

	describe('creating a motorcycle', () => {
		it('successfully created', async () => {
			const newMotorcycle = await motorcycleModel.create(motorcycleMock);
			expect(newMotorcycle).to.be.deep.equal(motorcycleMockWithId);
		});
	});

	describe('finding motorcycles', () => {
		it('successfully found', async () => {
			const motorcycles = await motorcycleModel.read();
			expect(motorcycles).to.be.deep.equal([motorcycleMockWithId]);
		});
	});

	describe('searching a motorcycle', () => {
		it('successfully found', async () => {
			const motorcycleFound = await motorcycleModel.readOne(motorcycleMockWithId._id);
			expect(motorcycleFound).to.be.deep.equal(motorcycleMockWithId);
		});

		it('_id not found', async () => {
			try {
				await motorcycleModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('updating a motorcycle', () => {
		it('successfully updated', async () => {
			const motorcycleFound = await motorcycleModel.update(motorcycleMockWithId._id, motorcycleMock);
			expect(motorcycleFound).to.be.deep.equal(motorcycleMockWithId);
		});

		it('_id not found', async () => {
			try {
				await motorcycleModel.update('123ERRADO', motorcycleMock);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('deleting a motorcycle', () => {
		it('successfully deleted', async () => {
			const motorcycleFound = await motorcycleModel.delete(motorcycleMockWithId._id);
			expect(motorcycleFound).to.be.deep.equal(motorcycleMockWithId);
		});

		it('_id not found', async () => {
			try {
				await motorcycleModel.delete('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

});