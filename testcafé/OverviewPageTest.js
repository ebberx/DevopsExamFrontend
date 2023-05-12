import { Selector } from 'testcafe';
import {click} from "@testing-library/user-event/dist/click.js";
import { ClientFunction } from 'testcafe';

fixture("testing the overview page").page("http://localhost/overview")

test("testing input fields", async t =>{
    const searchinput = await Selector('#searchbar')
    await t
        .typeText(searchinput, 'test')
        .expect(searchinput.value).eql('test')
})



test("clicking the add collection button (not sure how to check url correctly)", async t =>{
    const buttonclick = await Selector('#createcolllectionlink')

    await t
        .click(buttonclick)
        const url = await ClientFunction(() => window.location.href);

    await t
        .expect(url()).eql('http://localhost/overview/create')

})