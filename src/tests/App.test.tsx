import {render, screen} from '@testing-library/react';
import { describe, beforeEach, test, expect} from 'vitest';
import {App} from '../App.tsx';

describe("App Test", ()=>{
	beforeEach(()=>{
		render(<App/>);
	})
	test('should render all elements on the homepage', ()=>{
		expect(screen.queryAllByText('re-Image').length).toEqual(1);
		expect(screen.queryAllByTestId("logo").length).toEqual(1);
		expect(screen.queryAllByText('The Simple Image Converter').length).toEqual(1);
		expect(screen.queryAllByText('Choose File...').length).toEqual(1);
	})
})