import React, { useEffect } from 'react';

const Commerce = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white pt-[7rem] pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">特定商取引法に基づく表記</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">販売業者</h3>
              <p>株式会社ニューロジカ</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">運営統括責任者</h3>
              <p>代表取締役 ピーク・エイダン・ゼファー</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">所在地</h3>
              <p>〒150-0045</p>
              <p>東京都渋谷区神泉町10-15アネックス神泉301</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">連絡先</h3>
              <p>電話番号：080-9321-0828</p>
              <p>受付時間：10:00-18:00（土日祝を除く）</p>
              <p>メールアドレス：info@neurogica.com</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">販売価格</h3>
              <p>各商品・サービスページに記載の金額（消費税込み）</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">追加手数料等</h3>
              <p>決済手数料：無料</p>
              <p>その他の手数料：サービスの内容により異なる場合があります（各サービスページに記載）</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">支払方法</h3>
              <p>クレジットカード決済（VISA, MasterCard, American Express, JCB）</p>
              <p>銀行振込</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">決済期間</h3>
              <p>クレジットカード：即時決済</p>
              <p>銀行振込：注文日より3営業日以内</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">引渡し時期</h3>
              <p>デジタルサービス：お支払い確認後、即時にご利用可能</p>
              <p>コンサルティングサービス：契約成立後、別途協議の上で決定</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">返品・キャンセルについて</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">＜サービス提供開始前のキャンセル＞</h4>
                  <p>サービス提供開始前であれば、全額返金いたします。</p>
                </div>
                <div>
                  <h4 className="font-semibold">＜サービス提供開始後のキャンセル＞</h4>
                  <p>原則として返金はできません。ただし、当社の責めに帰すべき事由がある場合は、個別にご相談させていただきます。</p>
                </div>
                <div>
                  <h4 className="font-semibold">＜サービスに不備がある場合＞</h4>
                  <p>当社の責任において適切に対応させていただきます。まずはお問い合わせ窓口までご連絡ください。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commerce; 