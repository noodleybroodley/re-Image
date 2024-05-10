import {render, screen} from '@testing-library/react';
import { describe, beforeEach, test, expect} from 'vitest';
import SimpleListMenu from "../../components/SimpleListMenu";


describe("SimpleListMenu Test", ()=>{
	beforeEach(()=>{
		render(<SimpleListMenu options={['bruv']}/>)
	});
	test('example',()=>{
		expect(1).toEqual(1);
	})
})