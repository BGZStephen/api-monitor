import express from "express"
import { listenerCallback } from ".";

jest.mock("express")
jest.mock("cors")
jest.mock("./config")

global.console = {
  log: jest.fn()
} as any;

describe("index", () => {
  test("It initialises an express server", () => {
    const service = require(".")
  
    expect(service).toBeDefined()
    expect(express).toHaveBeenCalled()
  })
})

describe("listenerCallback", () => {
  test("It calls console log showing the starting port", () => {
    const res = listenerCallback();

    expect(res).toEqual(undefined)
    expect(global.console.log).toHaveBeenCalledWith("App listening on port 3000")
  })
})