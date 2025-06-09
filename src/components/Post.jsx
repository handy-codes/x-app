"use client"

import Link from 'next/link';
import { HiDotsHorizontal } from 'react-icons/hi';
import Icons from './Icons';
import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ru from 'javascript-time-ago/locale/ru'

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

export default function Post({ post, id }) {
  // Convert Firestore Timestamp to JS Date
  const postDate = post.timestamp?.toDate ? post.timestamp.toDate() : new Date(post.timestamp);

  return (
    <div className='flex p-3 border-b border-gray-200 hover:bg-gray-50'>
      <img
        src={post?.profileImg}
        alt='user-img'
        className='h-11 w-11 rounded-full mr-4'
      />
      <div className='flex-1'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-1 whitespace-nowrap'>
            <h4 className='font-bold text-sm truncate'>{post?.name}</h4>
            <span className='text-xs truncate'>@{post?.username}</span>
            <span className='text-xs text-gray-500'>
              <ReactTimeAgo date={postDate} locale='en-US' />
            </span>
          </div>
          <HiDotsHorizontal className='text-sm' />
        </div>

        <Link href={`/posts/${id}`}>
          <p className='text-gray-800 text-sm my-3'>{post?.text}</p>
        </Link>
        {post?.image && (
          <Link href={`/posts/${id}`}>
            <img src={post.image} alt="post image" className='rounded-2xl mr-2' />
          </Link>
        )}
        <Icons id={id} uid={post.uid} />
      </div>
    </div>
  );
}


