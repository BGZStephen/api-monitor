const express = jest.fn().mockReturnValue({
  use: jest.fn().mockReturnThis(),
  listen: jest.fn().mockReturnThis()
})

// @ts-ignore-next-line
express.json = jest.fn();

export default express;