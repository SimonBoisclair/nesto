import React from 'react'
import posts from './reducers/postsReducer'
import getApiData from './publicActions/getApiData'

it('Should rearenge the orders of the array',async () => {
  // Testing postsReducer CHANGE_POSITION action
  let a = (posts(["obj0","obj1","obj2","obj3","obj4","obj5","obj6","obj7",],{
    type:"CHANGE_POSITION",
    payload:{
      position : 0, 
      newPosition: 1
    }
  }))

  let b = (posts(a,{
    type:"CHANGE_POSITION",
    payload:{
      position : 0, 
      newPosition: 1
    }
  }))

  let c = (posts(b,{
    type:"CHANGE_POSITION",
    payload:{
      position : 7, 
      newPosition: 1
    }
  }))

  expect(a[0]).toBe("obj1")
  expect(b[0]).toBe("obj0")
  expect(c[1]).toBe("obj7")
  expect(c[7]).toBe("obj6")
})

let answer
it('Should get data from the API',async () => {
  answer = await getApiData()
  expect(typeof answer).toBe("object")
  expect(answer.posts.length).toBe(100)
  expect(answer.albums.length).toBe(100)
  expect(Object.keys(answer.albums[0])[0]).toBe("userId")
  expect(Object.keys(answer.albums[0])[1]).toBe("id")
  expect(Object.keys(answer.albums[0])[2]).toBe("title")

  expect(Object.keys(answer.posts[0])[0]).toBe("userId")
  expect(Object.keys(answer.posts[0])[1]).toBe("id")
  expect(Object.keys(answer.posts[0])[2]).toBe("title")
  expect(Object.keys(answer.posts[0])[3]).toBe("body")
})

it('Should populate the postsReducer',async () => {
  let c = (posts(undefined,{
    type:"LOAD_ALBUMS_AND_POSTS",
    payload:answer
  }))
  expect(c.length).toBe(100)
  expect(Object.keys(c[0])[0]).toBe("userId")
  expect(Object.keys(c[0])[1]).toBe("id")
  expect(Object.keys(c[0])[2]).toBe("title")
  expect(Object.keys(c[0])[3]).toBe("body")
})