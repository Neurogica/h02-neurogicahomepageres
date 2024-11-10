import React, { useEffect } from 'react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen text-white pt-[7rem] pb-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">利用規約</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">1. 総則</h3>
              <p>本規約は、株式会社ニューロジカ（以下「当社」）が提供するすべてのサービス（以下「本サービス」）の利用条件を定めるものです。</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">2. 利用登録</h3>
              <p>本サービスの利用を希望する者は、本規約に同意の上、当社の定める方法によって利用登録を申請するものとします。</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">3. 禁止事項</h3>
              <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません：</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害する行為</li>
                <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                <li>他のユーザーに成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
              </ul>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">4. 本サービスの提供の停止等</h3>
              <p>当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします：</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>本サービスにかかるコンピュータシステムの保守点検または更新を行う場合</li>
                <li>地震、落雷、火災、停電または天災などの不可抗力により、本サービスの提供が困難となった場合</li>
                <li>コンピュータまたは通信回線等が事故により停止した場合</li>
                <li>その他、当社が本サービスの提供が困難と判断した場合</li>
              </ul>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">5. 免責事項</h3>
              <p>当社は、本サービスに関して、ユーザーと他のユーザーまたは第三者との間において生じた取引、連絡または紛争等について一切責任を負いません。</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">6. サービス内容の変更等</h3>
              <p>当社は、ユーザーに通知することなく、本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし、これによってユーザーに生じた損害について一切の責任を負いません。</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">7. 利用規約の変更</h3>
              <p>当社は、必要と判断した場合には、ユーザーに通知することなくいつでも本規約を変更することができるものとします。</p>
            </div>

            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-xl font-semibold mb-2">8. 準拠法・裁判管轄</h3>
              <p>本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当社の本店所在地を管轄する裁判所を専属的合意管轄とします。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms; 