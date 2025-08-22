import React from 'react'
import NavbarPage from '../../components/Navbar'
import { useState } from "react";
import Footer from '../../components/Footer'

import './Home.css'



const home = () => {

  const [View, setView] = useState(false);

  const [ShowView, setShowView] = useState(false);
  return (
    <div>
         <NavbarPage/>

         <main className='Header'>
            <h1 className='header-text'>LEARNING MADE EASY</h1>
            <p className='subtitle'>simplified summaries for students.</p>
         </main>

            <div className="container my-5">
  <div className="row">
    <div className="col-md-6 col-12 mb-5">
      <div className="card shadow p-5 text-center">
        <div className="card-body">
          <h5 className="card-title">Part of Speech</h5>
          <p className="card-text">The categories words belong to based on their role in a sentence.</p>
          <button
        className="btn btn-primary" 
        onClick={() => setView(!View)}
      > 
          {View ? "Hide Details" : "Show Details"}
      </button>

      
           {View && (
            
        <div className="mt-4 border-t pt-3 text-sm  show">
          <hr /> <br />
        <h5><strong>Parts of speech</strong> are like different types of building blocks that make up words in a sentence.</h5> 
        <p><strong>There are 8 main parts of speech:</strong> Noun, Pronoun, Adjective, Adverb, Preposition, Conjunction, Interjection </p>
        <ul>
          <li> Noun: Names a person, place, thing, or idea (e.g., dog, city, happiness). </li>
          <li>Pronoun: Replaces a noun to avoid repetition (e.g., he, she, it, they).</li>
          <li>Verb: Expresses an action or state of being (e.g., run, is, think). </li>
          <li>Adjective: Describes or modifies a noun or pronoun (e.g., happy, blue, tall). </li>
          <li>Adverb: Describes or modifies a verb, adjective, or another adverb (e.g., quickly, very, softly). </li> 
          <li>Preposition: Shows the relationship between a noun or pronoun and other words in the sentence (e.g., in, on, at, to).</li>
          <li>Conjunction: Joins words, phrases, or clauses (e.g., and, but, or). </li>
          <li>Interjection: Expresses emotion (e.g., Wow! Ouch!). </li>
        </ul>
  
          
        </div>
      )}

        </div>
      </div>
    </div>

    <div className="col-md-6 col-12 mb-5">
      <div className="card shadow p-5 text-center">
        <div className="card-body">
          <h5 className="card-title">Synonyms and Antonyms </h5>
          <p className="card-text">Words with similar or opposite meanings</p>
           <button
        className="btn btn-primary" 
        onClick={() => setShowView(!ShowView, setView) }
      > 
          {ShowView ? "Hide Details" : "Show Details"}
      </button>
        {ShowView && (
        <div className="mt-4 border-t pt-3 text-sm  show">
          <hr /> <br />
          <h5><strong>Synonyms</strong> are words that have the same or similar meaning </h5> 
          <h4>Examples</h4>
          <ul>
            <li> abadon: forsake,leave</li>
            <li>big: large, huge, vast</li>
            <li>power: ability, might, capacity</li>
          </ul>

          <h5><strong>Antonyms</strong> are words that have the opposite meaning</h5>
          <h4>Examples</h4>
          <ul>
            <li>above - below</li>
            <li>accept - refuse</li>
            <li>cuel - kind</li>
          </ul>

          
        </div>
      )}
        </div>
      </div>
      </div>
      </div>
      <a className='topic-link' href="Topic">View more topics</a>
        </div>


      <Footer/>
    </div>
  )
}

export default home