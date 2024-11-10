import React, { useEffect } from 'react';

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white pt-[7rem] pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">カスタマーサポート</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">お問い合わせ方法</h3>
              <p>以下の方法でお問い合わせいただけます：</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>メール：info@neurogica.com</li>
                <li>電話：080-9321-0828（平日10:00-18:00）</li>
              </ul>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">よくあるご質問</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Q: サービスの利用方法がわかりません</h4>
                  <p className="mt-2">A: 各サービスページに詳細な利用方法を記載しております。ご不明な点がございましたら、お気軽にお問い合わせください。</p>
                </div>
                <div>
                  <h4 className="font-semibold">Q: 請求に関する質問がありますが、どこに問い合わせればよいですか？</h4>
                  <p className="mt-2">A: 請求に関するお問い合わせは、メールアドレス（info@neurogica.com）までご連絡ください。</p>
                </div>
                <div>
                  <h4 className="font-semibold">Q: サービスの解約方法を教えてください</h4>
                  <p className="mt-2">A: 解約をご希望の場合は、メールまたはお電話にてご連絡ください。担当者が手続きのご案内をさせていただきます。</p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">対応時間</h3>
              <p>平日：10:00-18:00</p>
              <p>土日祝日：休業</p>
              <p className="mt-2 text-sm">※緊急の場合は、上記時間外でも対応いたしますので、メールにてご連絡ください。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support; 