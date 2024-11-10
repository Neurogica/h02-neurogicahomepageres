import React, { useEffect } from 'react';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white pt-[7rem] pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">プライバシーポリシー</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">1. 個人情報の取り扱いについて</h3>
              <p>株式会社ニューロジカ（以下「当社」）は、お客様の個人情報保護の重要性を認識し、以下の方針に基づき個人情報の保護に努めます。</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">2. 収集する個人情報</h3>
              <p>当社は、以下の個人情報を収集する場合があります：</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>会社名</li>
                <li>その他、サービス提供に必要な情報</li>
              </ul>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">3. 個人情報の利用目的</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>サービスの提供および運営</li>
                <li>お問い合わせへの対応</li>
                <li>サービスの改善および新サービスの開発</li>
                <li>重要なお知らせの通知</li>
              </ul>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">4. 個人情報の第三者提供</h3>
              <p>当社は、以下の場合を除き、お客様の同意なく個人情報を第三者に提供いたしません：</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要な場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合</li>
              </ul>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">5. 個人情報の安全管理</h3>
              <p>当社は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">6. お問い合わせ窓口</h3>
              <p>個人情報の取扱いに関するお問い合わせは、下記までご連絡ください：</p>
              <p className="mt-2">株式会社ニューロジカ</p>
              <p>メール：info@neurogica.com</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">7. プライバシーポリシーの改定</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 