import Image from 'next/image'

const ProfilePhoto = () => (
    <Image
        src='/images/profile.jpg'
        height={200}
        width={100}
        alt="Ronneil Petterson"
    />
)