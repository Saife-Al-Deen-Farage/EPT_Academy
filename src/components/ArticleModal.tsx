import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { 
  X, 
  Clock, 
  Calendar, 
  User, 
  MessageSquare, 
  Send, 
  Trash2, 
  Share2 
} from 'lucide-react';

export const ArticleModal: React.FC = () => {
  const { 
    selectedArticle, 
    setSelectedArticle, 
    comments, 
    addComment, 
    deleteComment, 
    currentUser, 
    language, 
    t 
  } = useApp();

  const [authorName, setAuthorName] = useState('');
  const [commentContent, setCommentContent] = useState('');
  const [commentSuccess, setCommentSuccess] = useState(false);

  if (!selectedArticle) return null;

  const articleComments = comments.filter(c => c.targetType === 'blog' && c.targetId === selectedArticle.id);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentContent.trim()) return;

    addComment({
      targetType: 'blog',
      targetId: selectedArticle.id,
      authorName: authorName.trim() || t('زائر مهتم', 'Interested Reader'),
      authorEmail: '',
      content: commentContent.trim(),
    });

    setCommentContent('');
    setCommentSuccess(true);
    setTimeout(() => setCommentSuccess(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden my-8 text-start animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Cover Image & Close */}
        <div className="relative h-64 sm:h-80 bg-slate-950 overflow-hidden">
          <img
            src={selectedArticle.coverImage}
            alt={t(selectedArticle.titleAr, selectedArticle.titleEn)}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
          
          <button
            onClick={() => setSelectedArticle(null)}
            className="absolute top-4 end-4 p-2 rounded-full bg-slate-950/80 hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 inset-x-6 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
              <span>{selectedArticle.category}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>{selectedArticle.readTimeMinutes} {t('دقائق قراءة', 'min read')}</span>
              <span aria-hidden="true" className="text-slate-500">·</span>
              <span>{selectedArticle.date}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {t(selectedArticle.titleAr, selectedArticle.titleEn)}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[calc(85vh-16rem)] overflow-y-auto">
          
          {/* Author */}
          <div className="flex items-center gap-2 text-xs text-slate-400 pb-4 border-b border-slate-800">
            <User className="w-4 h-4 text-blue-400" />
            <span>{t('بقلم:', 'Author:')} {selectedArticle.author}</span>
          </div>

          {/* Article Full Text */}
          <div className="prose prose-invert max-w-none text-slate-200 text-sm sm:text-base leading-relaxed space-y-4 whitespace-pre-line font-normal">
            {t(selectedArticle.contentAr, selectedArticle.contentEn)}
          </div>

          {/* Interactive Comments Section (Prompt #18) */}
          <div className="pt-8 border-t border-slate-800 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>{t('التعليقات والمناقشات', 'Comments & Discussion')} ({articleComments.length})</span>
              </h3>
            </div>

            {/* Comment Submission Form */}
            <form onSubmit={handleCommentSubmit} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder={t('اسمك (اختياري)', 'Your name (optional)')}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                />
              </div>
              <textarea
                rows={2}
                required
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder={t('اكتب تعليقك أو استفسارك حول المقال...', 'Add your thoughts or questions...')}
                className="w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
              />
              <div className="flex items-center justify-between pt-1">
                {commentSuccess && (
                  <span className="text-xs text-emerald-400">
                    {t('تمت إضافة تعليقك بنجاح!', 'Comment added!')}
                  </span>
                )}
                <button
                  type="submit"
                  className="ms-auto px-4 py-2 text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Send className="w-3 h-3" />
                  <span>{t('نشر التعليق', 'Post Comment')}</span>
                </button>
              </div>
            </form>

            {/* Existing Comments List */}
            <div className="space-y-3">
              {articleComments.map((cmt) => (
                <div key={cmt.id} className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-white">{cmt.authorName}</span>
                      <span className="text-[11px] text-slate-500">{new Date(cmt.createdAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {cmt.content}
                    </p>
                  </div>

                  {currentUser.role === 'admin' && (
                    <button
                      onClick={() => deleteComment(cmt.id)}
                      className="p-1.5 text-slate-500 hover:text-rose-400 rounded transition-colors"
                      title={t('حذف التعليق (إدارة)', 'Delete comment (Admin)')}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => setSelectedArticle(null)}
            className="px-5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
          >
            {t('إغلاق المقال', 'Close Article')}
          </button>
        </div>

      </div>
    </div>
  );
};
