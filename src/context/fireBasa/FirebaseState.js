import React, { useReducer } from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './FirebaseContextReducer'
import { FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, ADD_NOTE } from '../types'
import { Loader } from '../../components/Loader'

const REACT_APP_DB_URL = 'https://reacttodolist-90e9f-default-rtdb.firebaseio.com'

// const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({ children }) => {

    const initialState = {
        notes: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({ type: SHOW_LOADER })

    console.log(showLoader)

    const fetchNotes = async () => {
        showLoader()
    
        const res = await axios.get(`${REACT_APP_DB_URL}/notes.json`)
        const payload = Object.keys(res.data || []).map( key =>{
            return {
                ...res.data[key],
                id:key
            }
        })
        dispatch({
            type: FETCH_NOTES, payload
        })
        console.log(res.data)
    }
    

    const addNote = async title => {
        const note = {
            title, date: new Date().toJSON()
        }

        try {
            const res = await axios.post(`${REACT_APP_DB_URL}/notes.json`, note)
            console.log('addNote', res.data)
            const payload = {
                ...note,
                id: res.data.name
            }

            dispatch({
                type: ADD_NOTE,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }        
    }

    const removeNote = async id =>{
        await axios.delete(`${REACT_APP_DB_URL}/notes/${id}.json`)

        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader,addNote,removeNote,fetchNotes,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}