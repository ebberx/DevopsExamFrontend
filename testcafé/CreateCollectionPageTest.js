import {ClientFunction, Selector} from 'testcafe';
import GetBackendEndpoint from "../src/config.js";
import {wait} from "@testing-library/user-event/dist/utils/index.js";
import * as assert from "assert";

const setLocalStorageItem = ClientFunction((key, value) => window.localStorage.setItem(key, value));

fixture("testing the create collection page").page("http://localhost:3000" + "/collection/create").beforeEach(async t =>{
    await setLocalStorageItem("UserID", "2")
    await setLocalStorageItem("UserEmail", "asd@asd.cas")
    await setLocalStorageItem("UserName", "asd")
})


test("testing input fields", async t =>{
    const nameinput = await Selector('#collectionname')
    const descriptioninput = await Selector('#collectiondescription')
    const urlinput = await Selector('#collectionimageurl')
    await t
        .typeText(nameinput, 'test')
        .typeText(descriptioninput, 'what a test')
        .typeText(urlinput, 'https://i.imgur.com/kaI2iEj.jpeg')

        .expect(nameinput.value).eql('test')
        .expect(descriptioninput.value).eql('what a test')
        .expect(urlinput.value).eql('https://i.imgur.com/kaI2iEj.jpeg')
})

test("testing creating a collection", async t =>{
    const nameinput = await Selector('#collectionname')
    const descriptioninput = await Selector('#collectiondescription')
    const urlinput = await Selector('#collectionimageurl')
    const createclick = await Selector('#btncreate')

    await t
        .typeText(nameinput, 'test')
        .typeText(descriptioninput, 'what a test')
        .typeText(urlinput, 'https://i.imgur.com/kaI2iEj.jpeg')
        .setNativeDialogHandler(() => true)
        .click(createclick)

    const dialoghistory = await t.getNativeDialogHistory();

    expect(dialoghistory.length).toBeGreaterThan(0)

    await t
        .expect(dialoghistory[0].type).eql('alert')
        .expect(dialoghistory[0].text).eql('Successfully added collection!')

})


