<?xml version="1.0"?>
<?Copyright (c) Microsoft Corporation. All rights reserved.?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:msxsl="urn:schemas-microsoft-com:xslt" xmlns:ms="urn:microsoft-performance" exclude-result-prefixes="msxsl" version="1.0">
	<xsl:output method="html" indent="yes" standalone="yes" encoding="UTF-16"/>
	<xsl:template name="localization">
		<_locDefinition>
			<_locDefault _loc="locNone"/>
			<_locTag _loc="locData">String</_locTag>
			<_locTag _loc="locData">Font</_locTag>
			<_locTag _loc="locData">Mirror</_locTag>
		</_locDefinition>
	</xsl:template>
	<!-- ********** Images ********** -->
	<xsl:variable name="images">
		<Image id="check">res://sdiageng.dll/check.png</Image>
		<Image id="error">res://sdiageng.dll/error.png</Image>
		<Image id="info">res://sdiageng.dll/info.png</Image>
		<Image id="warning">res://sdiageng.dll/warning.png</Image>
		<Image id="expand">res://sdiageng.dll/expand.png</Image>
		<Image id="collapse">res://sdiageng.dll/collapse.png</Image>
		<Image id="print">res://sdiageng.dll/print.png</Image>
		<!-- ** alt text for the images ** -->
		<!-- root cause states -->
		<String id="fixed">Fixed</String>
		<String id="notfixed">Not Fixed</String>
		<String id="detected">Detected</String>
		<!-- details -->
		<String id="info">Informational</String>
		<String id="warning">Warning</String>
		<String id="error">Error</String>
		<!-- expand and print buttons -->
		<String id="expand">Expand</String>
		<String id="print">Print</String>
	</xsl:variable>
	<xsl:variable name="font">
		<Font id="font">Segoe UI</Font>
	</xsl:variable>
	<xsl:variable name="Mirror">
		<Mirror>No</Mirror>
	</xsl:variable>
	<xsl:variable name="right">
		<xsl:choose>
			<xsl:when test="$Mirror='No'">right</xsl:when>
			<xsl:otherwise>left</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<xsl:variable name="left">
		<xsl:choose>
			<xsl:when test="$Mirror='No'">left</xsl:when>
			<xsl:otherwise>right</xsl:otherwise>
		</xsl:choose>
	</xsl:variable>
	<!-- ********** Script ********** -->
	<msxsl:script language="JScript" implements-prefix="ms">

var g_tag = 0;
var g_id = new Array();

function tag()
{
    return ++g_tag;
}

function idof(key)
{
  if (!g_id[key]) {
    g_id[key] = tag();
  }

  return g_id[key];
}

</msxsl:script>
	<!-- ********** Body ********** -->
	<xsl:template match="/">
		<html>
			<xsl:attribute name="dir">
				<xsl:choose>
					<xsl:when test="$Mirror='No'">ltr</xsl:when>
					<xsl:otherwise>rtl</xsl:otherwise>
				</xsl:choose>
			</xsl:attribute>
			<style>
  body{ font-family: '<xsl:value-of select="$font"/>'; color: black; margin-<xsl:value-of select="$left"/>: 5px; margin-<xsl:value-of select="$right"/>: 5px; margin-top: 5px; }
  td{ font-size: 75%; vertical-align: top; }
  th{ width: 120px; font-size: 70%; font-weight: normal; vertical-align: top; text-align: <xsl:value-of select="$left"/>; padding-<xsl:value-of select="$left"/>: 0px; }
  tr{ padding-top: 2px; }
  hr{ border:1px solid lightgrey; height:1px;}
  a:visited{ color: #0066CC; }
  a{ color: #0066CC; }
  .page { width: 480px; }
  .arrows{ font-family: webdings; font-size: 15px; line-height: 9px; font-weight: 100; width: 16px; }
  .bullets{ font-family: webdings; font-size: 10px; font-weight: 100; padding-top: 8px; padding-<xsl:value-of select="$left"/>: 4px; }
  .info{ width: 100%; }
  .title{ color: windowtext; font-size: 9pt; font-weight: bold; text-align: <xsl:value-of select="$left"/>; }
  .heading{ font-family: 'Segoe UI'; color: windowtext; font-size: 12pt; font-weight: normal; }
  .detail{ cursor: hand; color: #0066CC; }
  .content { padding-<xsl:value-of select="$left"/>: 20px; }
  .italic{ font-style: italic; }
  .clip{ width: 330px; overflow: hidden; text-overflow: ellipsis; }
  .scroll{ width: 458px; overflow-x: scroll; border: solid lightgrey 1px; margin-top: 3px; padding: 4px;}
  .local{ text-decoration: none; }
  .block{ margin-bottom: 12px; page-break-inside: avoid; }
  .b1{ background: white; }
  .b2{ background: whitesmoke; }
  .popup{ position: absolute; z-index: 1; background-color: infobackground; border: solid; border-width: 1px; border-<xsl:value-of select="$right"/>-width: 2px; border-bottom-width: 2px; font-size: x-small; font-weight: normal; text-align: <xsl:value-of select="$left"/>;padding: 8px; width: 240px; }
</style>
			<body onload="init();" onbeforeprint="expand();" onafterprint="collapse();">
				<center>
					<form>
						<!-- ********** Runtime Script ********** -->
						<script>

function init()
{
  try{
    for (var i=0; i&lt;document.all.length; i++) {
      if (document.all[i].shade == 'true') {
        shade(document.all[i]);
      }
    }
  }catch(e){
  }
}

function expand()
{
  try{
    for (var i=0; i&lt;document.all.length; i++) {
      if (document.all[i].expand == 'true') {
        document.all[i].expanded = folder(document.all[i], '');
      }

      if (document.all[i].className == 'scroll') {
        document.all[i].style.overflowX = 'hidden';
      }

      if (document.all[i].print == 'false') {
        document.all[i].style.display = 'none';
      }

      if (document.all[i].bullet == 'true') {
        document.all[i].altText = '<xsl:value-of select="'&lt;'"/>';
        document.all[i].innerText = '<xsl:value-of select="'&lt;'"/>';
        document.all[i].className = "bullets";
      }
    }
  }catch(e){
  }
}

function collapse()
{
  try{
    for (var i=0; i&lt;document.all.length; i++) {
      if (document.all[i].bullet == 'true') {
        document.all[i].innerText = '<xsl:value-of select="'5'"/>';
        document.all[i].altText = '<xsl:value-of select="'6'"/>';
        document.all[i].className = "arrows";
      }

      if (document.all[i].className == 'scroll') {
        document.all[i].style.overflowX = 'scroll';
      }

      if (document.all[i].expanded == true) {
        folder(document.all[i], 'none');
        document.all[i].expanded = false;
      }
      if (document.all[i].print == 'false') {
        document.all[i].style.display = '';
      }
    }
  }catch(e){
  }
}

function folder(d, state)
{
  try{

    var temp;
    var i = document.all("e_" + d.id);

    if (d.style.display == state) {
      return false;
    }

    if (d.style.display == 'none') {
      d.style.display = '';
    }else{
      d.style.display = 'none';
    }

    if (i.nodeName == "IMG") {
      temp = i.src;
      i.src = i.altImage;
      i.altImage = temp;
    }else{
      temp = i.innerText;
      i.innerText = i.altText;
      i.altText = temp;
    }

    window.event.cancelBubble = true;

  } catch(e) {
  }

  return true;
}

function popup(d)
{
  var x;
  var y;

  if (d.innerText == '') {
    return;
  }

  y = window.event.clientY + document.body.scrollTop - 5;

  if ((y + d.clientHeight) - document.body.scrollTop &gt; document.body.clientHeight) {
    y = y - d.clientHeight;
    if (y &lt; document.body.scrollTop) {
      y = document.body.scrollTop + 2;
    }
  }

  <xsl:choose>
								<xsl:when test="$Mirror='No'">
  x =  window.event.x + 12;

  if (d.clientWidth + x &gt; (document.body.clientWidth-4)) {
    d.style.left =  window.event.x - 8 - d.clientWidth;
    d.style.right = window.event.x - 8;
  }else{
    d.style.left =  x;
    d.style.right = x + d.clientWidth;
  }
    </xsl:when>
								<xsl:otherwise>
  x = document.body.clientWidth - window.event.x + 20;

  if (d.clientWidth + x &gt; (document.body.clientWidth-4)) {
    d.style.right =  x - 8 - d.clientWidth;
    d.style.left = x - 8;
  }else{
    d.style.right = x;
    d.style.left = x + d.clientWidth;
  }
    </xsl:otherwise>
							</xsl:choose>

  d.style.top = y;
  d.style.display = '';
}

function shade(tbody)
{
  for (var i = 0; i &lt; tbody.rows.length; i++) {
    if (i % 2 == 0) {
      className = "b1";
    }else{
      className = "b2";
    }

    try{
      tbody.rows[i].cells[1].className = className;
    }catch(e){
    }
  }
}

function key_print()
{
  if (window.event.keyCode == 13) {
    window.print();
    event.returnValue = false;
  }
}

function key_folder(d, state)
{
  if (window.event.keyCode == 13) {
    folder(d, state);
    event.returnValue = false;
  }
}

</script>
						<!-- ********** Report ********** -->
						<div class="page">
							<xsl:variable name="strings">
								<String id="Found">Issues found</String>
								<String id="Checked">Potential issues that were checked</String>
								<String id="Publisher">Publisher details</String>
								<String id="Detection">Detection details</String>
								<String id="Scripts">Scripts</String>
							</xsl:variable>
							<xsl:variable name="title">
								<xsl:choose>
									<xsl:when test="count(//MetaPackageInformation)">
										<xsl:value-of select="//MetaPackageInformation/@name"/>
									</xsl:when>
									<xsl:otherwise>
										<xsl:value-of select="//PackageInformation[1]/@name"/>
									</xsl:otherwise>
								</xsl:choose>
							</xsl:variable>
							<div print="false" tabindex="0" onclick="window.print();" onkeydown="key_print();">
								<xsl:attribute name="style">float: <xsl:value-of select="$right"/>; cursor: hand;</xsl:attribute>
								<xsl:call-template name="image">
									<xsl:with-param name="src" select="'print'"/>
									<xsl:with-param name="altText" select="'print'"/>
								</xsl:call-template>
							</div>
							<xsl:call-template name="title">
								<xsl:with-param name="title" select="$title"/>
								<xsl:with-param name="link" select="'Publisher'"/>
								<xsl:with-param name="strings" select="$strings"/>
							</xsl:call-template>
							<xsl:call-template name="summary">
								<xsl:with-param name="title" select="'Found'"/>
								<xsl:with-param name="strings" select="$strings"/>
								<xsl:with-param name="rootcause" select="//RootCause[Data[@id='Status'] != 'Not Checked' and Data[@id='Status'] != 'Not Detected']"/>
							</xsl:call-template>
							<xsl:call-template name="summary">
								<xsl:with-param name="title" select="'Checked'"/>
								<xsl:with-param name="strings" select="$strings"/>
								<xsl:with-param name="rootcause" select="//RootCause[Data[@id='Status'] = 'Not Detected']"/>
							</xsl:call-template>
							<xsl:call-template name="RootCauseEmpty"/>
							<xsl:if test="count(//RootCause[Data[@id='Status'] != 'Not Checked' and Data[@id='Status'] != 'Not Detected']) != 0">
								<div class="block">
									<xsl:call-template name="title">
										<xsl:with-param name="title" select="'Found'"/>
										<xsl:with-param name="link" select="'Detection'"/>
										<xsl:with-param name="strings" select="$strings"/>
									</xsl:call-template>
									<xsl:apply-templates select="//RootCause[Data[@id='Status'] != 'Not Checked' and Data[@id='Status'] != 'Not Detected']">
										<xsl:sort select="Data[@id='Status'] = 'Not Fixed'" data-type="text" order="descending"/>
										<xsl:sort select="Data[@id='Status'] = 'Detected'" data-type="text" order="descending"/>
										<xsl:sort select="Data[@id='Status'] = 'Fixed'" data-type="text" order="descending"/>
										<xsl:sort select="@id" data-type="text" order="ascending"/>
									</xsl:apply-templates>
								</div>
							</xsl:if>
							<xsl:if test="count(//RootCause[Data[@id='Status'] = 'Not Detected'])">
								<div class="block">
									<xsl:call-template name="title">
										<xsl:with-param name="title" select="'Checked'"/>
										<xsl:with-param name="link" select="'Detection'"/>
										<xsl:with-param name="strings" select="$strings"/>
									</xsl:call-template>
									<xsl:apply-templates select="//RootCause[Data[@id='Status'] = 'Not Detected']">
										<xsl:sort select="@id" data-type="text" order="ascending"/>
									</xsl:apply-templates>
								</div>
							</xsl:if>
							<xsl:if test="count(//Function)">
								<div class="block">
									<xsl:apply-templates select="//Function"/>
								</div>
							</xsl:if>
							<xsl:if test="count(//Script)">
								<div class="block">
									<xsl:call-template name="title">
										<xsl:with-param name="title" select="'Scripts'"/>
										<xsl:with-param name="link" select="'Detection'"/>
										<xsl:with-param name="strings" select="$strings"/>
									</xsl:call-template>
									<xsl:apply-templates select="//Script"/>
								</div>
							</xsl:if>
							<xsl:call-template name="DetectionInformation">
								<xsl:with-param name="strings" select="$strings"/>
							</xsl:call-template>
							<div class="block">
								<a name="Publisher"/>
								<xsl:call-template name="title">
									<xsl:with-param name="title" select="'Publisher'"/>
									<xsl:with-param name="tag" select="'Publisher'"/>
									<xsl:with-param name="strings" select="$strings"/>
								</xsl:call-template>
								<div id="c_Publisher" style="display: 'none';" expand="true">
									<xsl:apply-templates select="//Header/PackageInformation|//Header/MetaPackageInformation">
										<xsl:sort select="MetaPackageInformation" data-type="text" order="descending"/>
										<xsl:sort select="@id" data-type="text" order="ascending"/>
									</xsl:apply-templates>
								</div>
							</div>
						</div>
					</form>
				</center>
			</body>
		</html>
	</xsl:template>
	<!-- ********** Summary ********** -->
	<xsl:template name="summary">
		<xsl:param name="title"/>
		<xsl:param name="rootcause"/>
		<xsl:param name="strings"/>
		<xsl:if test="count(msxsl:node-set($rootcause))">
			<table class="info block" cellpadding="0" cellspacing="0" style="margin-top: 12px;">
				<tr style="padding-top: 0px;">
					<td colspan="3" class="title">
						<xsl:call-template name="label">
							<xsl:with-param name="strings" select="$strings"/>
							<xsl:with-param name="label" select="$title"/>
						</xsl:call-template>
					</td>
				</tr>
				<xsl:for-each select="msxsl:node-set($rootcause)">
					<xsl:sort select="Data[@id='Status'] = 'Not Fixed'" data-type="text" order="descending"/>
					<xsl:sort select="Data[@id='Status'] = 'Detected'" data-type="text" order="descending"/>
					<xsl:sort select="Data[@id='Status'] = 'Fixed'" data-type="text" order="descending"/>
					<xsl:sort select="Data[@id='Status'] = 'Not Detected'" data-type="text" order="ascending"/>
					<xsl:sort select="@id" data-type="text" order="ascending"/>
					<xsl:variable name="tag" select="ms:tag()"/>
					<tr style="padding-top: 8px; padding-bottom: 1px;">
						<td>
							<div nowrap="true" class="clip">
								<xsl:variable name="popup">popup_<xsl:value-of select="ms:tag()"/></xsl:variable>
								<a class="local">
									<xsl:attribute name="href">#<xsl:value-of select="ms:idof(string(@id))"/></xsl:attribute>
									<xsl:attribute name="onclick">folder(c_rc_<xsl:value-of select="ms:idof(string(@id))"/>, '')</xsl:attribute>
									<xsl:attribute name="onMouseOver">popup(<xsl:value-of select="$popup"/>); style.textDecoration='underline';</xsl:attribute>
									<xsl:attribute name="onMouseOut"><xsl:value-of select="$popup"/>.style.display='none'; style.textDecoration='none';</xsl:attribute>
									<xsl:value-of select="@name"/>
								</a>
							</div>
							<div class="popup" style="display:'none';">
								<xsl:attribute name="id"><xsl:value-of select="$popup"/></xsl:attribute>
								<div class="title" style="padding: 0px; padding-bottom: 3px;">
									<xsl:value-of select="@name"/>
								</div>
								<xsl:copy-of select="Data[@id='Description']"/>
							</div>
						</td>
						<td width="90px">
							<xsl:call-template name="RootCauseStatus"/>
						</td>
						<td width="20px">
							<xsl:call-template name="RootCauseImage"/>
						</td>
					</tr>
					<xsl:if test="Data[@id='Status'] != 'Not Detected' and .//Resolution">
						<tr style="padding-top: 0px;">
							<td colspan="4">
								<xsl:attribute name="align"><xsl:value-of select="$right"/></xsl:attribute>
								<table width="97%" cellpadding="0" cellspacing="0">
									<xsl:for-each select=".//Resolution">
										<xsl:sort select="Data[@id='Status'] = 'Failed'" data-type="text" order="descending"/>
										<xsl:sort select="Data[@id='Status'] = 'Succeeded'" data-type="text" order="descending"/>
										<xsl:sort select="Data[@id='Status'] = 'Informational'" data-type="text" order="descending"/>
										<xsl:sort select="Data[@id='Status'] = 'Not Run'" data-type="text" order="descending"/>
										<xsl:sort select="@id" data-type="text" order="ascending"/>
										<tr style="padding-top: 0px;">
											<td>
												<div nowrap="true" class="clip" style="padding: 2px;">
													<xsl:value-of select="@name"/>
												</div>
											</td>
											<td colspan="2" width="110px">
												<div style="padding-top: 2px">
													<xsl:call-template name="ResolutionStatus"/>
												</div>
											</td>
										</tr>
									</xsl:for-each>
								</table>
							</td>
						</tr>
					</xsl:if>
				</xsl:for-each>
			</table>
		</xsl:if>
	</xsl:template>
	<!-- ********** Root Cause ********** -->
	<xsl:template match="RootCause">
		<xsl:variable name="tag">rc_<xsl:value-of select="ms:idof(string(@id))"/></xsl:variable>
		<xsl:variable name="details"><xsl:value-of select="count(.//Detail) or (Data[@id='Status'] != 'Not Detected' and count(.//Resolution))"/></xsl:variable>
		<a><xsl:attribute name="name"><xsl:value-of select="ms:idof(string(@id))"/></xsl:attribute></a>
		<table class="info" cellpadding="0" cellspacing="0" style="margin-top: 12px">
			<tr>
				<td>
					<table class="info" cellpadding="0" cellspacing="0">
						<xsl:if test="$details = 'true'">
							<xsl:attribute name="onclick">folder(c_<xsl:value-of select="$tag"/>)</xsl:attribute>
							<xsl:attribute name="style">cursor: hand;</xsl:attribute>
						</xsl:if>
						<tr>
							<td width="20px">
								<xsl:if test="$details = 'true'">
									<div class="arrows" style="padding-top: 2px; width: 14px; height: 14px;" tabindex="0" bullet="true">
										<xsl:attribute name="onkeydown">key_folder(c_<xsl:value-of select="$tag"/>);</xsl:attribute>
										<xsl:attribute name="id">e_c_<xsl:value-of select="$tag"/></xsl:attribute>
										<xsl:attribute name="altText">5</xsl:attribute>
										<xsl:text>6</xsl:text>
									</div>
								</xsl:if>
							</td>
							<td class="title">
								<xsl:attribute name="style">padding-<xsl:value-of select="$right"/>: 12px</xsl:attribute>
								<xsl:value-of select="@name"/>
							</td>
							<td style="width: 90px;">
								<xsl:call-template name="RootCauseStatus"/>
							</td>
							<td style="width: 20px;">
								<xsl:call-template name="RootCauseImage"/>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<xsl:if test="string-length(Data[@id='Description'])">
				<tr style="padding-top: 8px">
					<td class="content">
						<div style="width: 420px;">
							<xsl:copy-of select="Data[@id='Description']"/>
						</div>
					</td>
				</tr>
			</xsl:if>
			<tr>
				<td class="content">
					<xsl:if test="position() != last()">
						<xsl:attribute name="style">border-bottom: solid 1px lightgrey; padding-bottom: 12px;</xsl:attribute>
					</xsl:if>
					<div style="display: 'none';" expand="true">
						<xsl:attribute name="id">c_<xsl:value-of select="$tag"/></xsl:attribute>
						<xsl:apply-templates select="DetectionInformation//Detail">
							<xsl:sort select="@verbosity = 'Error'" data-type="text" order="descending"/>
							<xsl:sort select="@verbosity = 'Warning'" data-type="text" order="descending"/>
							<xsl:sort select="@verbosity = 'Informational'" data-type="text" order="descending"/>
							<xsl:sort select="@id" data-type="text"/>
						</xsl:apply-templates>
						<xsl:if test="Data[@id='Status'] != 'Not Detected'">
							<xsl:apply-templates select=".//Resolution">
								<xsl:sort select="Data[@id='Status'] = 'Failed'" data-type="text" order="descending"/>
								<xsl:sort select="Data[@id='Status'] = 'Succeeded'" data-type="text" order="descending"/>
								<xsl:sort select="Data[@id='Status'] = 'Informational'" data-type="text" order="descending"/>
								<xsl:sort select="Data[@id='Status'] = 'Not Run'" data-type="text" order="descending"/>
								<xsl:sort select="@id" data-type="text" order="ascending"/>
							</xsl:apply-templates>
						</xsl:if>
					</div>
				</td>
			</tr>
		</table>
	</xsl:template>
	<xsl:template name="RootCauseStatus">
		<xsl:variable name="strings">
			<String id="Fixed">Fixed</String>
			<String id="Not Detected">Issue not present</String>
			<String id="Not Fixed">Not fixed</String>
			<String id="Detected">Detected</String>
		</xsl:variable>
		<div>
			<xsl:if test="Data[@id='Status'] = 'Not Detected'">
				<xsl:attribute name="class">italic</xsl:attribute>
			</xsl:if>
			<xsl:call-template name="label">
				<xsl:with-param name="strings" select="$strings"/>
				<xsl:with-param name="label" select="Data[@id='Status']"/>
			</xsl:call-template>
		</div>
	</xsl:template>
	<xsl:template name="RootCauseImage">
		<xsl:choose>
			<xsl:when test="Data[@id='Status'] = 'Not Fixed'">
				<xsl:call-template name="image">
					<xsl:with-param name="src" select="'error'"/>
					<xsl:with-param name="altText" select="'notfixed'"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:when test="Data[@id='Status'] = 'Detected'">
				<xsl:call-template name="image">
					<xsl:with-param name="src" select="'warning'"/>
					<xsl:with-param name="altText" select="'detected'"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:when test="Data[@id='Status'] = 'Fixed'">
				<xsl:call-template name="image">
					<xsl:with-param name="src" select="'check'"/>
					<xsl:with-param name="altText" select="'fixed'"/>
				</xsl:call-template>
			</xsl:when>
		</xsl:choose>
	</xsl:template>
	<xsl:template name="RootCauseEmpty">
		<xsl:variable name="strings">
			<String id="Empty">No issues detected</String>
		</xsl:variable>
		<xsl:if test="count(//RootCause[Data[@id='Status'] != 'Not Checked'] | //Function) = 0">
			<div class="title block" style="margin-top: 18px">
				<xsl:call-template name="label">
					<xsl:with-param name="strings" select="$strings"/>
					<xsl:with-param name="label" select="'Empty'"/>
				</xsl:call-template>
			</div>
		</xsl:if>
	</xsl:template>
	<!-- ********** Resolution ********** -->
	<xsl:template match="Resolution">
		<table class="info" cellpadding="0" cellspacing="0" style="border: 'none'; margin-top: 10px;">
			<tr>
				<td class="title">
					<table class="info" cellpadding="0" cellspacing="0">
						<tr>
							<td class="title">
								<xsl:attribute name="style">padding-<xsl:value-of select="$right"/>: 12px</xsl:attribute>
								<xsl:value-of select="@name"/>
							</td>
							<td width="110px">
								<xsl:call-template name="ResolutionStatus"/>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<xsl:if test="string-length(Data[@id='Description']) != 0">
				<tr style="padding-top: 8px">
					<td>
						<div style="width: 420px;">
							<xsl:copy-of select="Data[@id='Description']"/>
						</div>
					</td>
				</tr>
			</xsl:if>
			<xsl:if test="count(.//Detail)">
				<tr>
					<td>
						<xsl:apply-templates select=".//Detail">
							<xsl:sort select="@verbosity = 'Error'" data-type="text" order="descending"/>
							<xsl:sort select="@verbosity = 'Warning'" data-type="text" order="descending"/>
							<xsl:sort select="@verbosity = 'Informational'" data-type="text" order="descending"/>
							<xsl:sort select="@id" data-type="text"/>
						</xsl:apply-templates>
					</td>
				</tr>
			</xsl:if>
		</table>
	</xsl:template>
	<xsl:template name="ResolutionStatus">
		<xsl:variable name="strings">
			<String id="Not Run">Not run</String>
			<String id="Succeeded">Completed</String>
			<String id="Failed">Failed</String>
			<String id="Informational">Informational</String>
			<String id="Status">Status</String>
		</xsl:variable>
		<div class="italic">
			<xsl:call-template name="label">
				<xsl:with-param name="strings" select="$strings"/>
				<xsl:with-param name="label" select="Data[@id='Status']"/>
			</xsl:call-template>
		</div>
	</xsl:template>
	<!-- ********** Script ********** -->
	<xsl:template match="Script">
		<xsl:variable name="tag">rc_<xsl:value-of select="ms:tag()"/></xsl:variable>
		<xsl:variable name="details"><xsl:value-of select="count(.//Detail) or count(.//Parameters/Data)"/></xsl:variable>
		<table class="info" cellpadding="0" cellspacing="0" style="margin-top: 12px">
			<tr>
				<td>
					<table class="info" cellpadding="0" cellspacing="0">
						<xsl:if test="$details = 'true'">
							<xsl:attribute name="onclick">folder(c_<xsl:value-of select="$tag"/>)</xsl:attribute>
							<xsl:attribute name="style">cursor: hand;</xsl:attribute>
						</xsl:if>
						<tr>
							<td width="20px">
								<xsl:if test="$details = 'true'">
									<div class="arrows" style="padding-top: 2px; width: 14px; height: 14px;" tabindex="0" bullet="true">
										<xsl:attribute name="onkeydown">key_folder(c_<xsl:value-of select="$tag"/>);</xsl:attribute>
										<xsl:attribute name="id">e_c_<xsl:value-of select="$tag"/></xsl:attribute>
										<xsl:attribute name="altText">5</xsl:attribute>
										<xsl:text>6</xsl:text>
									</div>
								</xsl:if>
							</td>
							<td class="title">
								<xsl:attribute name="style">padding-<xsl:value-of select="$right"/>: 12px</xsl:attribute>
								<xsl:value-of select="@name"/>
							</td>
							<td style="width: 90px;">
								<xsl:call-template name="ScriptStatus"/>
							</td>
							<td style="width: 20px;">
								<xsl:call-template name="ScriptImage"/>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td class="content">
					<div>
						<table class="info" shade="true" cellspacing="0" cellpadding="0">
							<xsl:apply-templates select="Data"/>
						</table>
					</div>
				</td>
			</tr>
			<tr>
				<td class="content">
					<xsl:if test="position() != last()">
						<xsl:attribute name="style">border-bottom: solid 1px lightgrey; padding-bottom: 12px;</xsl:attribute>
					</xsl:if>
					<div style="display: 'none';" expand="true">
						<xsl:attribute name="id">c_<xsl:value-of select="$tag"/></xsl:attribute>
						<table class="info" shade="true" cellspacing="0" cellpadding="0">
							<xsl:apply-templates select="Parameters/Data"/>
						</table>
						<xsl:apply-templates select=".//Detail"/>
					</div>
				</td>
			</tr>
		</table>
	</xsl:template>
	<xsl:template name="ScriptStatus">
		<xsl:variable name="strings">
			<String id="Succeeded">Succeeded</String>
			<String id="Failed">Failed</String>
		</xsl:variable>
		<xsl:choose>
			<xsl:when test=".//ScriptException">
				<xsl:call-template name="label">
					<xsl:with-param name="strings" select="$strings"/>
					<xsl:with-param name="label" select="'Failed'"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="label">
					<xsl:with-param name="strings" select="$strings"/>
					<xsl:with-param name="label" select="'Succeeded'"/>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template name="ScriptImage">
		<xsl:choose>
			<xsl:when test=".//ScriptException">
				<xsl:call-template name="image">
					<xsl:with-param name="src" select="'error'"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="image">
					<xsl:with-param name="src" select="'check'"/>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<!-- ********** Function ********** -->
	<xsl:template match="Function">
		<xsl:variable name="tag">rc_<xsl:value-of select="ms:tag()"/></xsl:variable>
		<xsl:variable name="details"><xsl:value-of select="count(.//Data) != 0"/></xsl:variable>
		<table class="info" cellpadding="0" cellspacing="0" style="margin-top: 12px">
			<tr>
				<td>
					<table class="info" cellpadding="0" cellspacing="0">
						<xsl:if test="$details = 'true'">
							<xsl:attribute name="onclick">folder(c_<xsl:value-of select="$tag"/>)</xsl:attribute>
							<xsl:attribute name="style">cursor: hand;</xsl:attribute>
						</xsl:if>
						<tr>
							<td width="20px">
								<xsl:if test="$details = 'true'">
									<div class="arrows" style="padding-top: 2px; width: 14px; height: 14px;" tabindex="0" bullet="true">
										<xsl:attribute name="onkeydown">key_folder(c_<xsl:value-of select="$tag"/>);</xsl:attribute>
										<xsl:attribute name="id">e_c_<xsl:value-of select="$tag"/></xsl:attribute>
										<xsl:attribute name="altText">5</xsl:attribute>
										<xsl:text>6</xsl:text>
									</div>
								</xsl:if>
							</td>
							<td class="title">
								<xsl:attribute name="style">padding-<xsl:value-of select="$right"/>: 12px</xsl:attribute>
								<xsl:value-of select="@name"/>
							</td>
							<td style="width: 90px;">
								<xsl:call-template name="FunctionStatus"/>
							</td>
							<td style="width: 20px;">
								<xsl:call-template name="FunctionImage"/>
							</td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<td class="content">
					<table class="info" shade="true" cellspacing="0" cellpadding="0">
						<xsl:apply-templates select="Data"/>
					</table>
				</td>
			</tr>
			<tr>
				<td class="content">
					<xsl:if test="position() != last()">
						<xsl:attribute name="style">border-bottom: solid 1px lightgrey; padding-bottom: 12px;</xsl:attribute>
					</xsl:if>
					<div style="display: 'none';" expand="true">
						<xsl:attribute name="id">c_<xsl:value-of select="$tag"/></xsl:attribute>
						<xsl:apply-templates select=".//InputArguments"/>
						<xsl:apply-templates select=".//OutputArguments"/>
						<xsl:apply-templates select=".//OutputArguments/Data[@id = 'Result']"/>
					</div>
				</td>
			</tr>
		</table>
	</xsl:template>
	<xsl:template name="FunctionStatus">
		<xsl:variable name="strings">
			<String id="Succeeded">Succeeded</String>
			<String id="Failed">Failed</String>
		</xsl:variable>
		<xsl:choose>
			<xsl:when test="Data[@id='StatusCode']='0x0'">
				<xsl:call-template name="label">
					<xsl:with-param name="strings" select="$strings"/>
					<xsl:with-param name="label" select="'Succeeded'"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="label">
					<xsl:with-param name="strings" select="$strings"/>
					<xsl:with-param name="label" select="'Failed'"/>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template name="FunctionImage">
		<xsl:choose>
			<xsl:when test="Data[@id='StatusCode']='0x0'">
				<xsl:call-template name="image">
					<xsl:with-param name="src" select="'check'"/>
				</xsl:call-template>
			</xsl:when>
			<xsl:otherwise>
				<xsl:call-template name="image">
					<xsl:with-param name="src" select="'error'"/>
				</xsl:call-template>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<!-- ********** Arguments Templates ********** -->
	<xsl:template match="InputArguments[Data]|OutputArguments[Data[@id !='Result']]">
		<xsl:variable name="strings">
			<String id="InputArguments">Input Arguments</String>
			<String id="OutputArguments">Output Arguments</String>
		</xsl:variable>
		<table class="info" cellpadding="0" cellspacing="1" style="margin-top: 12px">
			<tr>
				<td colspan="2" class="italic">
					<xsl:call-template name="label">
						<xsl:with-param name="label" select="name()"/>
						<xsl:with-param name="strings" select="$strings"/>
					</xsl:call-template>
				</td>
			</tr>
			<xsl:apply-templates select="Data[@id != 'Result']"/>
		</table>
	</xsl:template>
	<xsl:template match="InputArguments|OutputArguments"/>
	<!-- ********** Output Results ********** -->
	<xsl:template match="Data[@id = 'Result' and parent::OutputArguments]">
		<table class="info" cellpadding="0" cellspacing="1" style="margin-top: 12px">
			<tr>
				<td colspan="2" class="italic">
					<xsl:value-of select="@name"/>
				</td>
			</tr>
			<tr>
				<td>
					<div class="scroll">
						<xsl:value-of select="."/>
					</div>
				</td>
			</tr>
		</table>
	</xsl:template>
	<!-- ********** Detail ********** -->
	<xsl:template match="Detail">
		<table class="info" cellpadding="0" cellspacing="0" style="margin-top: 12px">
			<tr>
				<td>
					<div>
						<xsl:attribute name="style">float:<xsl:value-of select="$left"/>;</xsl:attribute>
						<xsl:choose>
							<xsl:when test="@verbosity = 'Informational'">
								<xsl:call-template name="image">
									<xsl:with-param name="src" select="'info'"/>
									<xsl:with-param name="altText" select="'info'"/>
								</xsl:call-template>
							</xsl:when>
							<xsl:when test="@verbosity = 'Warning' or (@verbosity = 'Debug' and count(.//ScriptError) != 0)">
								<xsl:call-template name="image">
									<xsl:with-param name="src" select="'warning'"/>
									<xsl:with-param name="altText" select="'warning'"/>
								</xsl:call-template>
							</xsl:when>
							<xsl:when test="@verbosity = 'Error' or (@verbosity = 'Debug' and count(.//ScriptException) != 0)">
								<xsl:call-template name="image">
									<xsl:with-param name="src" select="'error'"/>
									<xsl:with-param name="altText" select="'error'"/>
								</xsl:call-template>
							</xsl:when>
							<xsl:otherwise>
								<xsl:call-template name="image">
									<xsl:with-param name="src" select="'info'"/>
									<xsl:with-param name="altText" select="'info'"/>
								</xsl:call-template>
							</xsl:otherwise>
						</xsl:choose>
					</div>
					<div>
						<xsl:attribute name="style">margin-<xsl:value-of select="$left"/>: 20px;</xsl:attribute>
						<xsl:value-of select="@name"/>
					</div>
				</td>
			</tr>
			<xsl:if test="string-length(Data[@id='Description'])">
				<tr style="padding-top: 8px">
					<td>
						<xsl:copy-of select="Data[@id='Description']"/>
					</td>
				</tr>
			</xsl:if>
			<xsl:variable name="valid-objects">
				<xsl:call-template name="valid-objects"/>
			</xsl:variable>
			<xsl:variable name="objects" select="count(.//Object)"/>
			<xsl:if test="$objects != 0 and $valid-objects = 'true'">
				<tr style="padding-top: 8px">
					<td>
						<xsl:choose>
							<xsl:when test="$objects = count(.//Property) and $objects != 1">
								<xsl:apply-templates select=".//Objects"/>
							</xsl:when>
							<xsl:when test=".//Objects[@show = 'all']">
								<xsl:apply-templates select=".//Object"/>
							</xsl:when>
							<xsl:otherwise>
								<xsl:apply-templates select=".//Object[position() &lt;= 10]"/>
							</xsl:otherwise>
						</xsl:choose>
					</td>
				</tr>
			</xsl:if>
			<xsl:if test="count(.//Data[@id='FileName'])">
				<tr>
					<td>
						<table class="info" shade="true" cellspacing="0" cellpadding="0">
							<xsl:apply-templates select=".//Data[@id='FileName']"/>
						</table>
					</td>
				</tr>
			</xsl:if>
			<xsl:if test="count(.//ScriptError)">
				<tr>
					<td>
						<table class="info" shade="true" cellspacing="0" cellpadding="0">
							<xsl:apply-templates select=".//ScriptError/Data"/>
						</table>
					</td>
				</tr>
			</xsl:if>
			<xsl:if test="count(.//ScriptException)">
				<tr>
					<td>
						<div class="scroll">
							<pre>
								<xsl:value-of select=".//ScriptException"/>
							</pre>
						</div>
					</td>
				</tr>
			</xsl:if>
		</table>
	</xsl:template>
	<!-- ********** Object Templates ********** -->
	<xsl:template name="valid-objects">
		<xsl:choose>
			<xsl:when test="count(Contents/Objects/Object[@Type='System.Management.Automation.PSCustomObject'])">true</xsl:when>
			<xsl:when test="count(Contents/Objects/Object[@Type='System.Diagnostics.Eventing.Reader.EventLogRecord'])">true</xsl:when>
			<xsl:when test="count(Contents/Objects/Object[@Type='System.String'])">true</xsl:when>
			<xsl:otherwise>false</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
	<xsl:template match="Object"/>
	<xsl:template match="Objects">
		<table shade="true" class="info" cellpadding="0" cellspacing="0">
			<xsl:choose>
				<xsl:when test="@show = 'all'">
					<xsl:apply-templates select=".//Object" mode="list"/>
				</xsl:when>
				<xsl:otherwise>
					<xsl:apply-templates select=".//Object[position() &lt;= 10]" mode="list"/>
				</xsl:otherwise>
			</xsl:choose>
		</table>
	</xsl:template>
	<xsl:template match="Object[@Type='System.Management.Automation.PSCustomObject']" mode="list">
		<tr>
			<th>
				<xsl:if test="not(Property/@Name=preceding-sibling::Object/Property/@Name)">
					<xsl:value-of select="Property/@Name"/>:
      </xsl:if>
			</th>
			<td><xsl:copy-of select="Property"/></td>
		</tr>
	</xsl:template>
	<xsl:template match="Object[@Type='System.String']">
		<table class="info" cellpadding="0" cellspacing="0">
			<tr>
				<td><xsl:copy-of select="child::node()"/></td>
			</tr>
		</table>
	</xsl:template>
	<xsl:template match="Object[@Type='System.Management.Automation.PSCustomObject']">
		<table class="info" shade="true" cellpadding="0" cellspacing="0">
			<xsl:apply-templates select=".//Property" mode="localized"/>
		</table>
	</xsl:template>
	<xsl:template match="Object[@Type='System.Diagnostics.Eventing.Reader.EventLogRecord']">
		<xsl:variable name="strings">
			<String id="LevelDisplayName">Level</String>
			<String id="LogName">Log</String>
			<String id="TimeCreated">Date</String>
			<String id="Message">Message</String>
		</xsl:variable>
		<xsl:variable name="img">
			<xsl:choose>
				<xsl:when test="Property[@Name='Level']=3">warning</xsl:when>
				<xsl:when test="Property[@Name='Level']=2">error</xsl:when>
				<xsl:otherwise>info</xsl:otherwise>
			</xsl:choose>
		</xsl:variable>
		<table class="info" shade="true" cellspacing="0" cellpadding="0" style="margin-bottom: 12px">
			<tr>
				<th>
					<xsl:call-template name="label">
						<xsl:with-param name="label" select="'LevelDisplayName'"/>
						<xsl:with-param name="strings" select="$strings"/>
					</xsl:call-template>:
      </th>
				<td>
					<div>
						<xsl:attribute name="style">float:<xsl:value-of select="$left"/>;</xsl:attribute>
						<xsl:call-template name="image">
							<xsl:with-param name="src" select="$img"/>
							<xsl:with-param name="altText" select="$img"/>
						</xsl:call-template>
					</div>
					<div>
						<xsl:attribute name="style">padding-<xsl:value-of select="$left"/>: 20px;</xsl:attribute>
						<xsl:value-of select="Property[@Name='LevelDisplayName']"/>
					</div>
				</td>
			</tr>
			<xsl:variable name="properties">
				<xsl:copy-of select="Property"/>
			</xsl:variable>
			<xsl:for-each select="msxsl:node-set($strings)/String[@id != 'LevelDisplayName']">
				<xsl:variable name="node" select="@id"/>
				<xsl:apply-templates select="msxsl:node-set($properties)/Property[@Name = $node]">
					<xsl:with-param name="strings" select="$strings"/>
				</xsl:apply-templates>
			</xsl:for-each>
		</table>
	</xsl:template>
	<!-- ********** Object Property ********** -->
	<xsl:template match="Property">
		<xsl:param name="strings"/>
		<xsl:variable name="name" select="@Name"/>
		<xsl:variable name="label">
			<xsl:copy-of select="msxsl:node-set($strings)/String[@id = $name][1]/child::node()"/>
		</xsl:variable>
		<xsl:if test="string-length(.) and string-length($label)">
			<tr>
				<th><xsl:value-of select="$label"/>:</th>
				<td><xsl:copy-of select="child::node()"/></td>
			</tr>
		</xsl:if>
	</xsl:template>
	<xsl:template match="Property" mode="localized">
		<xsl:if test="string-length(.) and @Name">
			<tr>
				<th><xsl:value-of select="@Name"/>:</th>
				<td><xsl:copy-of select="child::node()"/></td>
			</tr>
		</xsl:if>
	</xsl:template>
	<!-- ********** Data ********** -->
	<xsl:template match="Data">
		<xsl:if test="string-length(.)">
			<tr>
				<th><xsl:value-of select="@name"/>:</th>
				<td><div class="clip"><xsl:copy-of select="child::node()"/></div></td>
			</tr>
		</xsl:if>
	</xsl:template>
	<xsl:template match="Data[@id='RunningTime']">
		<xsl:variable name="strings">
			<String id="millisecond">ms</String>
		</xsl:variable>
		<tr>
			<th><xsl:value-of select="@name"/>:</th>
			<td>
				<xsl:value-of select="."/>
				<xsl:text>
				</xsl:text>
				<xsl:call-template name="label">
					<xsl:with-param name="strings" select="$strings"/>
					<xsl:with-param name="label" select="'millisecond'"/>
				</xsl:call-template>
			</td>
		</tr>
	</xsl:template>
	<xsl:template match="Data[@id='FileName']">
		<xsl:if test="string-length(.)">
			<tr>
				<th>
					<xsl:if test="position() = 1">
						<xsl:value-of select="@name"/>:
        </xsl:if>
				</th>
				<td>
					<a target="_NEW">
						<xsl:attribute name="href"><xsl:value-of select="."/></xsl:attribute>
						<xsl:value-of select="."/>
					</a>
				</td>
			</tr>
		</xsl:if>
	</xsl:template>
	<!-- ********** Detection Details ********** -->
	<xsl:template name="DetectionInformation">
		<xsl:param name="strings"/>
		<div class="block">
			<a name="Detection"/>
			<xsl:call-template name="title">
				<xsl:with-param name="title" select="'Detection'"/>
				<xsl:with-param name="tag" select="'Detection'"/>
				<xsl:with-param name="strings" select="$strings"/>
			</xsl:call-template>
			<div id="c_Detection" style="display: 'none';" expand="true">
				<xsl:for-each select="//Problem/DetectionInformation">
					<xsl:apply-templates select=".//Detail">
						<xsl:sort select="@verbosity = 'Error'" data-type="text" order="descending"/>
						<xsl:sort select="@verbosity = 'Warning'" data-type="text" order="descending"/>
						<xsl:sort select="@verbosity = 'Informational'" data-type="text" order="descending"/>
						<xsl:sort select="@id" data-type="text"/>
					</xsl:apply-templates>
				</xsl:for-each>
				<xsl:apply-templates select="//ResultReport[1]//ComputerInformation | //DebugReport[1]//ComputerInformation"/>
			</div>
		</div>
	</xsl:template>
	<!-- ********** Computer Information ********** -->
	<xsl:template match="ComputerInformation">
		<xsl:variable name="strings">
			<String id="Computer">Computer Name</String>
			<String id="Collection">Collection information</String>
		</xsl:variable>
		<table class="info" shade="true" cellpadding="0" cellspacing="0" style="margin-top: 12px">
			<tr style="padding-bottom: 8px;">
				<td colspan="2" class="title">
					<xsl:call-template name="label">
						<xsl:with-param name="strings" select="$strings"/>
						<xsl:with-param name="label" select="'Collection'"/>
					</xsl:call-template>
				</td>
			</tr>
			<tr>
				<th>
					<xsl:call-template name="label">
						<xsl:with-param name="strings" select="$strings"/>
						<xsl:with-param name="label" select="'Computer'"/>
					</xsl:call-template>:
      </th>
				<td><xsl:apply-templates select="@name"/></td>
			</tr>
			<xsl:apply-templates select="Data[@id='Version']"/>
			<xsl:apply-templates select="Data[@id='Architecture']"/>
			<xsl:apply-templates select="parent::Header/Data[@id='Time']"/>
			<xsl:apply-templates select="ancestor::DebugReport/Header/Data[@id='RunningAsAdmin']"/>
		</table>
	</xsl:template>
	<!-- ********** Package Information ********** -->
	<xsl:template match="PackageInformation|MetaPackageInformation">
		<table class="info" cellpadding="0" cellspacing="0" shade="true" style="margin-top: 12px">
			<tr>
				<td colspan="2" class="title">
					<xsl:value-of select="@name"/>
				</td>
			</tr>
			<xsl:if test="string-length(Data[@id='Description']) != 0">
				<tr style="padding-top: 8px; padding-bottom: 8px;">
					<td colspan="2">
						<xsl:copy-of select="Data[@id='Description']"/>
					</td>
				</tr>
			</xsl:if>
			<xsl:apply-templates select="Data[@id='Version']"/>
			<xsl:apply-templates select="Data[@id='Publisher']"/>
		</table>
	</xsl:template>
	<!-- ********** Title ********** -->
	<xsl:template name="title">
		<xsl:param name="title"/>
		<xsl:param name="link"/>
		<xsl:param name="tag"/>
		<xsl:param name="strings"/>
		<div>
			<xsl:if test="$tag">
				<xsl:attribute name="onclick">folder(c_<xsl:value-of select="$tag"/>)</xsl:attribute>
				<xsl:attribute name="style">cursor: hand;</xsl:attribute>
			</xsl:if>
			<table class="info" cellpadding="0" cellspacing="0" style="border-bottom: solid 1px lightgrey;">
				<tr style="padding-bottom: 3px;">
					<td class="heading">
						<div class="clip" nowrap="true">
							<xsl:call-template name="label">
								<xsl:with-param name="strings" select="$strings"/>
								<xsl:with-param name="label" select="$title"/>
							</xsl:call-template>
						</div>
					</td>
					<td>
						<xsl:attribute name="align"><xsl:value-of select="$right"/></xsl:attribute>
						<xsl:choose>
							<xsl:when test="$tag">
								<div tabindex="0" print="false">
									<xsl:attribute name="style">float:<xsl:value-of select="$right"/>;</xsl:attribute>
									<xsl:attribute name="onkeydown">key_folder(c_<xsl:value-of select="$tag"/>);</xsl:attribute>
									<xsl:call-template name="image">
										<xsl:with-param name="src" select="'expand'"/>
										<xsl:with-param name="alt" select="'collapse'"/>
										<xsl:with-param name="altText" select="'expand'"/>
										<xsl:with-param name="id">e_c_<xsl:value-of select="$tag"/></xsl:with-param>
									</xsl:call-template>
								</div>
							</xsl:when>
							<xsl:otherwise>
								<xsl:attribute name="style">padding-top: 9px; font-size: 8pt;</xsl:attribute>
								<a class="local" onmouseover="style.textDecoration='underline';" onmouseout="style.textDecoration='none';" print="false">
									<xsl:attribute name="onclick">folder(c_<xsl:value-of select="$link"/>, '')</xsl:attribute>
									<xsl:attribute name="href">#<xsl:value-of select="$link"/></xsl:attribute>
									<xsl:call-template name="label">
										<xsl:with-param name="strings" select="$strings"/>
										<xsl:with-param name="label" select="$link"/>
									</xsl:call-template>
								</a>
							</xsl:otherwise>
						</xsl:choose>
					</td>
				</tr>
			</table>
		</div>
	</xsl:template>
	<!-- ********** Image ********** -->
	<xsl:template name="image">
		<xsl:param name="src"/>
		<xsl:param name="alt"/>
		<xsl:param name="altText"/>
		<xsl:param name="id"/>
		<img border="0">
			<xsl:attribute xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="style">margin-<xsl:value-of select="$right"/>: 1px</xsl:attribute>
			<xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$altText">
				<xsl:attribute name="alt"><xsl:copy-of select="msxsl:node-set($images)/String[@id=$altText][1]/child::node()"/></xsl:attribute>
			</xsl:if>
			<xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$alt">
				<xsl:attribute name="altImage"><xsl:copy-of select="msxsl:node-set($images)/Image[@id=$alt][1]/child::node()"/></xsl:attribute>
			</xsl:if>
			<xsl:if xmlns:xsl="http://www.w3.org/1999/XSL/Transform" test="$id">
				<xsl:attribute name="id"><xsl:copy-of select="$id"/></xsl:attribute>
			</xsl:if>
			<xsl:attribute xmlns:xsl="http://www.w3.org/1999/XSL/Transform" name="src"><xsl:copy-of select="msxsl:node-set($images)/Image[@id=$src][1]/child::node()"/></xsl:attribute>
		</img>
	</xsl:template>
	<!-- ********** Label ********** -->
	<xsl:template name="label">
		<xsl:param name="label"/>
		<xsl:param name="strings"/>
		<xsl:variable name="string">
			<xsl:copy-of select="msxsl:node-set($strings)/String[@id = $label][1]/child::node()"/>
		</xsl:variable>
		<xsl:choose>
			<xsl:when test="string-length($string)">
				<xsl:copy-of select="$string"/>
			</xsl:when>
			<xsl:otherwise>
				<xsl:copy-of select="$label"/>
			</xsl:otherwise>
		</xsl:choose>
	</xsl:template>
</xsl:stylesheet>
