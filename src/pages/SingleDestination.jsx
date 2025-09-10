import React from 'react'
import { useParams } from 'react-router-dom'
import destinations from '../utils/destinations'
import Header from '../components/Header'

const cardStyle = {
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
  padding: '2rem',
  display: 'flex',
  gap: '2.5rem',
  alignItems: 'flex-start',
  marginTop: '2rem',
  maxWidth: 1100,
  marginLeft: 'auto',
  marginRight: 'auto'
}

const leftColStyle = {
  flex: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
}

const rightColStyle = {
  flex: 1,
  minWidth: 320,
  background: '#f7f9fa',
  borderRadius: 12,
  padding: '1.5rem',
  boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
}

const sectionTitle = {
  margin: '1.5rem 0 0.5rem',
  fontSize: '1.2rem',
  color: '#1a365d'
}

const label = {
  color: '#718096',
  fontWeight: 500,
  marginRight: 8
}

const SingleDestination = () => {
  const { id2 } = useParams()
  const destination = destinations.find(dest => dest.id === id2)

  if (!destination) {
    return <div style={{ textAlign: 'center', marginTop: 80, color: '#c53030' }}>Destination not found.</div>
  }

  return (
    <div style={{ background: '#f0f4f8', minHeight: '100vh', paddingBottom: 40 }}>
      <Header title={destination.title} subtitle={`Explore ${destination.city}`} />
      <div style={cardStyle}>
        <div style={leftColStyle}>
          <h2 style={{ marginBottom: 0 }}>{destination.title}</h2>
          <div>
            <span style={label}>District:</span>
            <span>{destination.district}</span>
          </div>
          <div>
            <span style={label}>Best Time to Visit:</span>
            <span>{destination.bestTime}</span>
          </div>
          <p style={{ lineHeight: 1.7, color: '#2d3748' }}>{destination.description}</p>
          <div>
            <h3 style={sectionTitle}>Things to Do</h3>
            <ul style={{ paddingLeft: 20, margin: 0 }}>
              {destination.thingsToDo.map((item, idx) => (
                <li key={idx} style={{ marginBottom: 6 }}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside style={rightColStyle}>
          <h3 style={{ marginTop: 0, marginBottom: 12, color: '#2b6cb0' }}>Location Map</h3>
          <div style={{ border: '1px solid #e2e8f0', borderRadius: 8, overflow: 'hidden', marginBottom: 16 }}>
            <iframe
              src={destination.map}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map"
            ></iframe>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default SingleDestination