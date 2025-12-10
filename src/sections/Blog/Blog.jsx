import React, { useEffect, useRef, useState } from 'react';
import { BLOG_POSTS } from '../../data/content';
import { SectionHeader, Card, Tag } from '../../components/ui';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '../../components/icons';
import './Blog.css';

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

const BlogCard = ({ post, index, isVisible }) => {
  return (
    <a
      href={post.url}
      className={`blog-card ${isVisible ? 'blog-card--visible' : ''}`}
      style={{ animationDelay: `${0.1 + index * 0.15}s` }}
    >
      <Card variant="bordered" hover={true} padding="large" className="blog-card__inner">
        <div className="blog-card__meta">
          <span className="blog-card__date">
            <CalendarIcon size={14} />
            {formatDate(post.date)}
          </span>
          <span className="blog-card__read-time">
            <ClockIcon size={14} />
            {post.readTime}
          </span>
        </div>

        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>

        <div className="blog-card__tags">
          {post.tags.map((tag) => (
            <Tag key={tag} variant="muted" size="small">
              {tag}
            </Tag>
          ))}
        </div>

        <span className="blog-card__read-more">
          Read article <ArrowRightIcon size={16} />
        </span>
      </Card>
    </a>
  );
};

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" className={`blog ${isVisible ? 'blog--visible' : ''}`} ref={sectionRef}>
      <div className="blog__container">
        <SectionHeader
          number={5}
          title="Blog"
          subtitle="Thoughts & learnings"
        />

        <div className="blog__grid">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard
              key={post.id}
              post={post}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

