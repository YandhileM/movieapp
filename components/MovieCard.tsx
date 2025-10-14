import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity } from 'react-native'

const MovieCard = ({id, poster_path, title, vote_average, 
    release_date}: Movie) => {
  return (
    <Link href={{ pathname: "/movies/[id]", params: { id: id.toString() } }} asChild>
        <TouchableOpacity className="w-[30%]">
            <Image
                source={{
                    uri: poster_path ? 
                    `https://image.tmdb.org/t/p/w500${poster_path}` :
                    'https://via.placehold.co/600x400/lalalala/ffffff/png'
                }}
                className="w-full h-52 rounded-lg"
                resizeMode="cover"
            />
            <Text className="text-sm text-white mt-2 font-bold">{title}</Text>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard