import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'lxm9hrna',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skvsamGyVDthbiA7WSttKcAUHRLlC4ApcfhF0WpnolkFYAj4pu6vtm3Y9YkkYc43jDpK067RYIqLa7hNAnkeEoVLGiP7MWN68q19h8wU0pjfcY29sTbk0oPBA8pHOvTISQglCB42eJV7cPWM7XuOMiIU2Ahx9CgeEjUVZWMdjJSiOrcoK2wa',
  useCdn: false,
})